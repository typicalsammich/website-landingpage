import {quoteSchema} from '@/lib/validation';
import {calculate} from '@/lib/pricing';
export async function POST(request:Request){
if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Request origin is not allowed.'},{status:403});
try{const raw=await request.text();if(raw.length>16000)return Response.json({error:'Request is too large.'},{status:413});const data=quoteSchema.safeParse(JSON.parse(raw));if(!data.success)return Response.json({error:'Please check your quote and contact information.'},{status:400});
if(!process.env.LEAD_WEBHOOK_URL)return Response.json({error:'Quote delivery is not configured yet. Please call (714) 695-5646.'},{status:503});
const reference='VAI-'+data.data.key.toUpperCase();const record={...data.data,reference,estimate:calculate(data.data.config),consentRecordedAt:new Date().toISOString()};
const response=await fetch(process.env.LEAD_WEBHOOK_URL,{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':reference,...(process.env.LEAD_WEBHOOK_TOKEN?{Authorization:'Bearer '+process.env.LEAD_WEBHOOK_TOKEN}:{})},body:JSON.stringify(record),signal:AbortSignal.timeout(10000)});
if(!response.ok)throw Error('Delivery failed');const ack=await response.json() as {stored?:boolean;delivered?:boolean;reference?:string};if(ack.stored!==true||ack.delivered!==true||ack.reference!==reference)throw Error('Unconfirmed delivery');return Response.json({reference});
}catch{return Response.json({error:'We could not confirm delivery. Please retry, or call (714) 695-5646.'},{status:503})}}

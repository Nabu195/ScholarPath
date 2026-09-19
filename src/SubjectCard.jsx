import { Handle, Position } from '@xyflow/react'
import './SubjectCard.css';
export default function SubjectCard({data}) {

  return (
   <div className='subject-card'> 
   <div className='subject-title'>
      <h3>{data.title}</h3>
   </div>
   <Handle type='target' position={Position.Top} className='subject-handle'/>
   <div className='subject-meta'>
    {data.code}
    <br></br>
    عدد الساعات: {data.credits}
    <br></br> 
    {(data.subjectType == 1 ? "متطلبات الجامعة الإلزامية" : 
      data.subjectType == 2 ? "متطلبات الجامعة الاختيارية":
      data.subjectType == 3 ? "متطلبات الكلية الإلزامية" :
      data.subjectType == 4 ? "المتطلبات الإلزامية المشتركة للاختصاصات":
      data.subjectType == 5 ? "متطلبات إلزامية للذكاء الاصطناعي" :
      data.subjectType == 6 ? "متطلبات اختيارية للذكاء الاصطناعي " :
       
       
       "")}
      {data.note}
   </div>

  

   <Handle type='source' position={Position.Bottom} className='subject-handle'/>
   </div>
  )
}



import { ReactFlow, Background, Controls } from '@xyflow/react'
import SubjectCard from './SubjectCard'
import '@xyflow/react/dist/style.css'
import './index.css';
const nodeTypes = {
    subjectCard :SubjectCard,
};
/*

    {
        id: '',
        type: 'subjectCard',
        position: {x: , y: },
        data: { code: '', title: '', credits: , subjectType:},
    },
    
    */
const initialNodes = [
  //    MAIN
    {
        id: 'TL195',
        type: 'subjectCard',
        position: {x: 0, y: -300 },
        data: { code: 'الخطة الدراسية', title: 'جامعة قاسيون - الهندسة المعلوماتية', credits: 172},
    },
    // ----------------------------
  //    MATH
    {
        id: '4310000',
        type: 'subjectCard',
        position: {x: 1000, y: 0},
        data: { code: '4310000', title: 'رياضيات 1', credits: 4, subjectType: 3},
    },
    {
        id: '4310001',
        type: 'subjectCard',
        position: {x: 1600, y: 400},
        data: { code: '4310001', title: 'رياضيات 2', credits: 3, subjectType: 3},
    },
       {
           id: '4310003',
           type: 'subjectCard',
           position: {x: 1600, y: 600},
           data: { code: '4310003', title: 'رياضيات 3', credits: 3, subjectType: 4},
       },
          {
              id: '1120900',
              type: 'subjectCard',
              position: {x: 1600, y: 800},
              data: { code: '1120900', title: 'تحليل النظم والإشارات', credits: 3, subjectType: 4},
          },
             {
                 id: '1130300',
                 type: 'subjectCard',
                 position: {x: 1600, y: 1000},
                 data: { code: '1130300', title: 'الاتصالات', credits: 3, subjectType: 4},
             },
                {
                    id: '1130301',
                    type: 'subjectCard',
                    position: {x: 1800, y: 1200},
                    data: { code: '1130301', title: ' الاتصالات المتقدمة', credits: 3, subjectType: 4},
                },
                {
                    id: '1130800',
                    type: 'subjectCard',
                    position: {x: 1400, y: 1200},
                    data: { code: '1130800', title: 'شبكات الحاسوب', credits: 3, subjectType: 4},
                },
       {
           id: '4320004',
           type: 'subjectCard',
           position: {x: 1000, y: 600},
           data: { code: '4320004', title: 'الإحصاء والاحتمالات', credits: 3, subjectType: 4},
       },
          {
              id: '4330006',
              type: 'subjectCard',
              position: {x: 1000, y: 800},
              data: { code: '4330006', title: 'التحليل العددي', credits: 3, subjectType: 4},
          },
             {
                 id: '4330007',
                 type: 'subjectCard',
                 position: {x: 1000, y: 1000},
                 data: { code: '4330007', title: 'بحوث العمليات', credits: 3, subjectType: 4},
             },
          
       {
           id: '4320005',
           type: 'subjectCard',
           position: {x: 2400, y: 600},
           data: { code: '4320005', title: 'رياضيات متقطعة', credits: 3, subjectType: 4},
       },
          {
              id: '1141001',
              type: 'subjectCard',
              position: {x: 2400, y: 800},
              data: { code: '1141001', title: 'اللغات الصورية', credits: 3, subjectType: 4},
          },

  //    PHYSICS
    // ----------------------------
    {
        id: '4110000',
        type: 'subjectCard',
        position: {x: -1000, y: 0},
        data: { code: '4110000', title: 'فيزياء 1', credits: 4, subjectType: 3},
    },
       {
           id: '1110100',
           type: 'subjectCard',
           position: {x: -1000 , y: 200},
           data: { code: '1110100', title: 'الدارات الكهربائية', credits: 3, subjectType: 4},
       },
          {
              id: '1120201',
              type: 'subjectCard',
              position: {x: -1000 , y: 400},
              data: { code: '1120201', title: 'المنطق الرقمي', credits: 4, subjectType: 4},
          },
             {
                 id: '1120400',
                 type: 'subjectCard',
                 position: {x: -1000, y: 600},
                 data: { code: '1120400', title: 'بنيان الحاسوب', credits: 3, subjectType: 4},
             },
                {
                    id: '1140600',
                    type: 'subjectCard',
                    position: {x: -800, y: 800},
                    data: { code: '1140600', title: 'أنظمة التشغيل', credits: 3, subjectType: 4},
                },
                {
                    id: '1130401',
                    type: 'subjectCard',
                    position: {x: -1200, y: 800},
                    data: { code: '1130401', title: 'المعالجات الصغرية', credits: 4, subjectType: 4},
                },
    
  //    PROGRAMMING
    // ----------------------------
    {
        id: '1110501',
        type: 'subjectCard',
        position: {x: 0, y: 0 },
        data: { code: '1110501', title: 'مبادئ برمجة', credits: 3, subjectType : 4},
    },

       {
           id: '1110502',
           type: 'subjectCard',
           position: {x: 0, y: 400 },
           data: { code: '1110502', title: 'برمجة 1', credits: 3, subjectType: 4},
       },
          {
              id: '1120503',
              type: 'subjectCard',
              position: {x: 0, y: 800 },
              data: { code: '1120503', title: 'برمجة 2', credits: 3, subjectType: 4},
          },
           
             {
                 id: '1130505',
                 type: 'subjectCard',
                 position: {x: 400 , y: 1000},
                 data: { code: '1130505', title: 'لغات البرمجة ', credits: 3, subjectType: 4},
             },
                {
                    id: '1050811',
                    type: 'subjectCard',
                    position: {x: 200 , y: 1400},
                    data: { code: '1050811', title: 'البرمجة التفرعية',  credits: 3, subjectType: 4},
                },
                {
                    id: '1141000',
                    type: 'subjectCard',
                    position: {x: 600 , y: 1400},
                    data: { code: '1141000', title: 'مبادئ الذكاء الصنعي', credits: 3, subjectType: 4},
                },
             {
               id: '1120504',
               type: 'subjectCard',
               position: {x: -400 , y: 1000},
               data: { code: '1120504', title: 'خوارزميات وبنى معطيات', credits: 3, subjectType: 4},
             },
                {
                  id: '1130700',
                  type: 'subjectCard',
                  position: {x: -800 , y: 1400},
                  data: { code: '1130700', title: 'قواعد المعطيات', credits: 3, subjectType: 4},
                },
                   {
                     id: '1141100',
                     type: 'subjectCard',
                     position: {x: -800 , y: 1600},
                     data: { code: '1141100', title: 'تحليل وتصميم النظم البرمجية', credits: 3, subjectType: 4},
                   },  
                {
                    id: '0730511',
                    type: 'subjectCard',
                    position: {x: -400 , y: 1400},
                    data: { code: '0730511', title: 'خوارزميات متقدمة ', credits: 3, subjectType: 4},
                },
         
    // ----------------------------

]
const initialEdges = [
  {
    id: 'eTL195-4310000',
    source: 'TL195',
    target: '4310000',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4310000-4310001',
    source: '4310000',
    target: '4310001',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4310001-4310003',
    source: '4310001',
    target: '4310003',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4310001-4320005',
    source: '4310001',
    target: '4320005',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4310001-4320004',
    source: '4310001',
    target: '4320004',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4320004-4330006',
    source: '4320004',
    target: '4330006',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4330006-4330007',
    source: '4330006',
    target: '4330007',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4320005-1141001',
    source: '4320005',
    target: '1141001',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4310001-4310003',
    source: '4310001',
    target: '4310003',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4310003-1120900',
    source: '4310003',
    target: '1120900',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1120900-1130300',
    source: '1120900',
    target: '1130300',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1130300-1130800',
    source: '1130300',
    target: '1130800',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1130300-1130301',
    source: '1130300',
    target: '1130301',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  
      // ----------------------------
  {
    id: 'eTL195-4110000',
    source: 'TL195',
    target: '4110000',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e4110000-1110100',
    source: '4110000',
    target: '1110100',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1110100-1120201',
    source: '1110100',
    target: '1120201',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1120201-1120400',
    source: '1120201',
    target: '1120400',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1120400-1130401',
    source: '1120400',
    target: '1130401',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1120400-1140600',
    source: '1120400',
    target: '1140600',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
      // ----------------------------
  {
    id: 'eTL195-1110501',
    source: 'TL195',
    target: '1110501',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1110501-1110502',
    source: '1110501',
    target: '1110502',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1110502-1120503',
    source: '1110502',
    target: '1120503',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1120503-1120504',
    source: '1120503',
    target: '1120504',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1120503-1130505',
    source: '1120503',
    target: '1130505',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1130505-1050811',
    source: '1130505',
    target: '1050811',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1130505-1141000',
    source: '1130505',
    target: '1141000',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1120504-0730511',
    source: '1120504',
    target: '0730511',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1120504-1130700',
    source: '1120504',
    target: '1130700',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
  {
    id: 'e1130700-1141100',
    source: '1130700',
    target: '1141100',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },
]
export default function App() {

  return (
    <>
    <h2 className='main-title'>Scholar Path</h2>
   <div  style= {{width: '100vw',  height: '100vh', background: '#16192d'}}>
    <ReactFlow nodes= {initialNodes} edges={initialEdges} nodeTypes={nodeTypes} fitView>
      <Background color='#cbd5e1' gap={16}/>
      <Controls/>
    </ReactFlow>
   </div>
   </>
  )
}


/*    FREEZER



    {
                 id: '1',
                 type: 'subjectCard',
                 position: {x: -1400 , y: 1400},
                 data: { code: '..', title:  'TBD', credits: 3, subjectType: 4},
             },

             {
                 id: '2',
                 type: 'subjectCard',
                 position: {x: -1000 , y: 1200},
                 data: { code: '..', title:  'TBD', credits: 3, subjectType: 4},
             },

 {
              id: '3',
              type: 'subjectCard',
              position: {x: -400 , y: 1000},
              data: { code: '..', title:  'TBD', credits: 3, subjectType: 4},
          },




{
    id: 'e1120504-tbd3',
    source: '1120504',
    target: '3',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },

      id: 'e1141100-1141100',
    source: '1141100',
    target: '1',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },

{
    id: 'e1141100-1141100',
    source: '1141100',
    target: '1',
    animated: true,
    style: {stroke: '#3b82f6', strokeWidth: 2}
  },







*/
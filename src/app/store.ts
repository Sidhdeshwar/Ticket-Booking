 export const bookingSchedule = {
  morning: {
              silver: {
                         A : [0,0,0,0,0,0,0,0,0,0,0,0]
                       },
              golden: {
                        B : [0,0,0,0,0,0,0,0,0,0,0,0],
                        C :[0,0,0,0,0,0,0,0,0,0,0,0],
                        D : [0,0,0,0,0,0,0,0,0,0,0,0]
                      },
              diamond: {
                        E : [0,0,0,0,0,0,0,0,0,0,0,0],
                        F :[0,0,0,0,0,0,0,0,0,0,0,0],
                        G : [0,0,0,0,0,0,0,0,0,0,0,0],
                        H : [0,0,0,0,0,0,0,0,0,0,0,0]
                      },
              totalPrice: 100,
              selected:true

             },
  afternoon: {
              silver: {
                         A : [0,0,0,0,0,0,0,0,0,0,0,0]
                       },
              golden: {
                        B : [0,0,0,0,0,0,0,0,0,0,0,0],
                        C :[0,0,0,0,0,0,0,0,0,0,0,0],
                        D : [0,0,0,0,0,0,0,0,0,0,0,0]
                      },
              diamond: {
                        E : [0,0,0,0,0,0,0,0,0,0,0,0],
                        F :[0,0,0,0,0,0,0,0,0,0,0,0],
                        G : [0,0,0,0,0,0,0,0,0,0,0,0],
                        H : [0,0,0,0,0,0,0,0,0,0,0,0]
                      },
              totalPrice: 200,
              selected:false

             },
evening: {
              silver: {
                         A : [0,0,0,0,0,0,0,0,0,0,0,0]
                       },
              golden: {
                        B : [0,0,0,0,0,0,0,0,0,0,0,0],
                        C :[0,0,0,0,0,0,0,0,0,0,0,0],
                        D : [0,0,0,0,0,0,0,0,0,0,0,0]
                      },
              diamond: {
                        E : [0,0,0,0,0,0,0,0,0,0,0,0],
                        F :[0,0,0,0,0,0,0,0,0,0,0,0],
                        G : [0,0,0,0,0,0,0,0,0,0,0,0],
                        H : [0,0,0,0,0,0,0,0,0,0,0,0]
                      },
              totalPrice: 300,
              selected:false

             }

}
///////////////////////////////////////////////////
export const morning = {
  silver: {
             A : [0,0,0,0,0,0,0,0,0,0,0,0]
           },
  golden: {
            B : [0,0,0,0,0,0,0,0,0,0,0,0],
            C :[0,0,0,0,0,0,0,0,0,0,0,0],
            D : [0,0,0,0,0,0,0,0,0,0,0,0]
          },
  diamond: {
            E : [0,0,0,0,0,0,0,0,0,0,0,0],
            F :[0,0,0,0,0,0,0,0,0,0,0,0],
            G : [0,0,0,0,0,0,0,0,0,0,0,0],
            H : [0,0,0,0,0,0,0,0,0,0,0,0]
          },
  totalPrice: 100,
  selected:true
 };

 export const afternoon = {
             silver: {
                        A : [0,0,0,0,0,0,0,0,0,0,0,0]
                      },
             golden: {
                       B : [0,0,0,0,0,0,0,0,0,0,0,0],
                       C :[0,0,0,0,0,0,0,0,0,0,0,0],
                       D : [0,0,0,0,0,0,0,0,0,0,0,0]
                     },
             diamond: {
                       E : [0,0,0,0,0,0,0,0,0,0,0,0],
                       F :[0,0,0,0,0,0,0,0,0,0,0,0],
                       G : [0,0,0,0,0,0,0,0,0,0,0,0],
                       H : [0,0,0,0,0,0,0,0,0,0,0,0]
                     },
             totalPrice: 200,
             selected:false

            };

export const evening = {
  silver: [{ type: 'A',
             A : [0,0,0,0,0,0,0,0,0,0,0,0]
           }],
  golden: [{ type:'B', B : [0,0,0,0,0,0,0,0,0,0,0,0]},
          {  type: 'C', C :[0,0,0,0,0,0,0,0,0,0,0,0]},
          {  type: 'D', D : [0,0,0,0,0,0,0,0,0,0,0,0]}
          ],
  diamond: [{type:'E', E : [0,0,0,0,0,0,0,0,0,0,0,0]},
           { type:'F', F : [0,0,0,0,0,0,0,0,0,0,0,0]},
           { type:'G', G : [0,0,0,0,0,0,0,0,0,0,0,0]},
           { type:'H', H : [0,0,0,0,0,0,0,0,0,0,0,0]},
           ],
  totalPrice: 300,
  selected:false

 }

export const bookingSchedule1 = [morning,afternoon,evening];

export const ARRAY = [
  { shift:'morning',
               morning: [ { position: 'silver',
                                     silver: [{row:'A',A:[false,false,false,false,false,false,false,false,false,false,false,false]}]
                                    },
                                    {
                                      position: 'golden',
                                      golden:  [{row:'B',B:[false,false,false,false,false,false,false,false,false,false,false,false]},
                                                {row:'C',C:[false,false,false,false,false,false,false,false,false,false,false,false]},
                                                {row:'D',D:[false,false,false,false,false,false,false,false,false,false,false,false]}
                                               ]
                                    },
                                    {
                                      position:'diamond',
                                      diamond: [
                                        {row:'E',E:[false,false,false,false,false,false,false,false,false,false,false,false]},
                                        {row:'F',F:[false,false,false,false,false,false,false,false,false,false,false,false]},
                                        {row:'G',G:[false,false,false,false,false,false,false,false,false,false,false,false]},
                                        {row:'H',H:[false,false,false,false,false,false,false,false,false,false,false,false]}
                                               ]
                                    }
                                   ] ,
                 selected:true,
                 total:100

   },
   { shift:'afternoon',
   afternoon: [ { position: 'silver',
                silver: [{row:'A',A:[false,false,false,false,false,false,false,false,false,false,false,false]}]
               },
               {
                 position: 'golden',
                 golden:  [{row:'B',B:[false,false,false,false,false,false,false,false,false,false,false,false]},
                           {row:'C',C:[false,false,false,false,false,false,false,false,false,false,false,false]},
                           {row:'D',D:[false,false,false,false,false,false,false,false,false,false,false,false]}
                          ]
               },
               {
                 position:'diamond',
                 diamond: [
                   {row:'E',E:[false,false,false,false,false,false,false,false,false,false,false,false]},
                   {row:'F',F:[false,false,false,false,false,false,false,false,false,false,false,false]},
                   {row:'G',G:[false,false,false,false,false,false,false,false,false,false,false,false]},
                   {row:'H',H:[false,false,false,false,false,false,false,false,false,false,false,false]}
                          ]
               }
              ]  ,
        selected:false,
        total:200
},
{ shift:'evening',
       evening: [ { position: 'silver',
             silver: [{row:'A',A:[false,false,false,false,false,false,false,false,false,false,false,false]}]
            },
            {
              position: 'golden',
              golden:  [{row:'B',B:[false,false,false,false,false,false,false,false,false,false,false,false]},
                        {row:'C',C:[false,false,false,false,false,false,false,false,false,false,false,false]},
                        {row:'D',D:[false,false,false,false,false,false,false,false,false,false,false,false]}
                       ]
            },
            {
              position:'diamond',
              diamond: [
                {row:'E',E:[false,false,false,false,false,false,false,false,false,false,false,false]},
                {row:'F',F:[false,false,false,false,false,false,false,false,false,false,false,false]},
                {row:'G',G:[false,false,false,false,false,false,false,false,false,false,false,false]},
                {row:'H',H:[false,false,false,false,false,false,false,false,false,false,false,false]}
                       ]
            }
           ]  ,
      selected:false,
      total:300
}
]

console.log("Store : ",evening);


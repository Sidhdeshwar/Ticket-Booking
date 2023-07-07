



export let ARRAY: any = [
  {
    morning: [ {
                silver: [{A:[false,false,false,false,false,false,false,false,false,false,false,false]}]
               },
               {
                  golden:  [{B:[false,false,false,false,false,false,false,false,false,false,false,false]},
                            {C:[false,false,false,false,false,false,false,false,false,false,false,false]},
                            {D:[false,false,false,false,false,false,false,false,false,false,false,false]}
                           ]
               },
              {
                  diamond: [
                            {E:[false,false,false,false,false,false,false,false,false,false,false,false]},
                            {F:[false,false,false,false,false,false,false,false,false,false,false,false]},
                            {G:[false,false,false,false,false,false,false,false,false,false,false,false]},
                            {H:[false,false,false,false,false,false,false,false,false,false,false,false]}
                           ]
                                    }
                                   ] ,
    selected:true,
    movie:'Mortal Engines',
    total:0

   },
   {
   afternoon: [ {
                silver: [{A:[false,false,false,false,false,false,false,false,false,false,false,false]}]
               },
               {

                 golden:  [{B:[false,false,false,false,false,false,false,false,false,false,false,false]},
                           {C:[false,false,false,false,false,false,false,false,false,false,false,false]},
                           {D:[false,false,false,false,false,false,false,false,false,false,false,false]}
                          ]
               },
               {

                 diamond: [
                   {E:[false,false,false,false,false,false,false,false,false,false,false,false]},
                   {F:[false,false,false,false,false,false,false,false,false,false,false,false]},
                   {G:[false,false,false,false,false,false,false,false,false,false,false,false]},
                   {H:[false,false,false,false,false,false,false,false,false,false,false,false]}
                          ]
               }
              ]  ,
        selected:false,
        movie:'Extraction 2',
        total:0
},
{
       evening: [ {
             silver: [{row:'A',A:[false,false,false,false,false,false,false,false,false,false,false,false]}]
            },
            {

              golden:  [{B:[false,false,false,false,false,false,false,false,false,false,false,false]},
                        {C:[false,false,false,false,false,false,false,false,false,false,false,false]},
                        {D:[false,false,false,false,false,false,false,false,false,false,false,false]}
                       ]
            },
            {

              diamond: [
                {E:[false,false,false,false,false,false,false,false,false,false,false,false]},
                {F:[false,false,false,false,false,false,false,false,false,false,false,false]},
                {G:[false,false,false,false,false,false,false,false,false,false,false,false]},
                {H:[false,false,false,false,false,false,false,false,false,false,false,false]}
                       ]
            }
           ]  ,
      selected:false,
      movie:'Skyscrapper',
      total:0
}
]


let a :any = localStorage.getItem('movieTicket');
if(a)
{
  console.log('local storage data', JSON.parse(a))
  ARRAY = JSON.parse(a);
}

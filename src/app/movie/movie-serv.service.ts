import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServService {

  constructor() { }

  
  ARRAY : object[] = [
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



}

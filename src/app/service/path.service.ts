import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  public join(...segments:string[]):string{
    let url= segments.shift() ?? ""; // ?? = wenn undefined o. leer -> nimm leer string
    
    while(segments.length)
    {
      let nextSegment = segments.shift();
      if(url.endsWith('/')) {
        url = url.slice(0, -1); //wennschon 1 slash da ist dann slice das letzte / dann
      }
      if(nextSegment?.startsWith('/'))
      {
        nextSegment = nextSegment.slice(1,0);
      }
      url += "/" + nextSegment;



      //TODO anfügen und überprüfen wv slashes dazwischen sind
    }


    return url;

  }
}


import {startUdpServer} from 'denamed';



startUdpServer((query)=>{
    console.log(query);

},{port:8000})
;
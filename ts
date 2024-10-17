let a:string = "sad";
let c = <string>"sad";
let b:number = 1;
let d= <number>1;
let e:string|number=1;
const data = (x1:number,y1:number):number => {
return x1*y1;
}
type functiontype = (x1:number,y1:number) => number;
const data1:functiontype = (x1,y1) => {
    return x1*y1;
}
type Username = string | number;
let g:Username = ""
let arr:number[] = [12,24,36,48];
let arr2:string[] = ["sad"];
let arr3:Array<String> = ["a","b"];
const arr4:Array<number> = new Array(12);
const arr5:Array<number|string> = [12,23,35,1,"user"];
const arr6:[number,string] = [1,"a"];
type Obj = {
    height : number,
    width : number,
    gender?: boolean,
    func? : (n:number,m:number) => void
}
const obj:Obj = {
    height : 3434,
    width : 3443,
    gender : true,
    func : () => console.log(`hello`)    
}
// class obj for interface
const func = (n:number,m?:number):number => {
    if(typeof m === "undefined"){
        return n;
    }else{
        return n*m;                    
    }
}
type func1Type  = (n:number,m?:number) => number
const func1 = (n:number,m:number=20) => {
return n*m;
}
const func2 = (...m:number[]):number[] => {
    return m;
}
type GetDataType = (products : {
name : string,
stock : number;
readonly price : number;
}) => void;

const functionHere:GetDataType = (products) => {
    console.log(products);    
} 
//throw == nver
type themeMode = "light" | "dark";
const mode : themeMode = "dark";

import { useState } from "react";

export default function App() {
  const [showStory,setShowStory] = useState(false);
  const [xItem,setXItem] = useState("");
  const [yItem,setYItem] = useState("");
  const [zItem,setZItem] = useState("");
  const [customName,setCustomName]=useState("");//ユザネ
  const [storyName,setStoryName]=useState("Bob");//デフォルトのストーリーネーム
  const [ukus,setUkus] = useState("us");


  //配列中からランダムに値を選択
  function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }


  //X,Y,Zそれぞれの中身を実装
  const inX=["Willy the Goblin","Big Daddy","Father Christmas"];//xItemの内容
  const inY=["the soup kitchen","Disneyland","the White House"];//yItemの内容
  const inZ=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];//zItemの内容




  //2:Generate Random Storyの処理関数(アロ関)
  const generateRandomStory=()=>{
    //2.1,2.2,2.3:それぞれの内容をランダムに選ぶ
    const randomX=randomValueFromArray(inX);
    const randomY=randomValueFromArray(inY);
    const randomZ=randomValueFromArray(inZ);
    setXItem(randomX);
    setYItem(randomY);
    setZItem(randomZ);


    //GRSボタンが再度押されないと、変更しない
    setStoryName(customName || "Bob");

    //2.4:生成されたストーリーの表示
    setShowStory(true);
  };




  //event: input 要素の入力値が変更されたときの change イベント
  const handleUkusChange=(e)=>{//(アロ関)
    setUkus(e.target.value);
  };

  let temperature=94;
  let weight=300;

  //cC=華氏から摂氏へ変換,cS=ポンドからストーンへ変換
  const convertCentigrade=(fahrenheit)=>((fahrenheit-32)*5)/9;
  const convertStone=(pounds)=>pounds/14;

  //ukラジオボタンが押された時..
  if(ukus==="uk"){
    //.toFixed(0)で整数へ
    //ストーリー中の温度の単位を華氏から摂氏に変換する
    temperature=convertCentigrade(temperature).toFixed(0);

    //ストーリー中の重さの単位をポンドからストーンに変換する
    weight=convertStone(weight).toFixed(0);

  }


  return (
    <>

      
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" 
               placeholder="Enter name"
               value={customName}
               onChange={(e)=>setCustomName(e.target.value)} 
        />
      </div>


      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us" 
        checked={ukus === "us"} onChange={handleUkusChange}
        />
        
        
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk" 
        checked={ukus === "uk"} onChange={handleUkusChange}
        />


      </div>




      <div>
        <button onClick={generateRandomStory}>Generate random story</button>
      </div>
      
      
      
      {showStory && (
        <p>
          It was {temperature} {ukus==="us"?"fahrenheit":"centigrade"} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {storyName} saw the whole thing, but was not surprised — {xItem} weighs {weight}{" "}
          {ukus==="us"?"pounds":"stone"}, and it was a hot day.
        </p>
      )}
    </>
  );
}
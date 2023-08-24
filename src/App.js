
import { useState } from 'react';
import './App.css';
import Pune from './Pune';
import Mumbai from './Components/Mumbai';
import Xyz from './Components/Xyz'



const pune = [
{
  image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDJLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
  moviename : "Gadar 2: The Katha ",
},
{
  image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMDQuN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
  moviename : "OMG 2"
},
{
  image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTIwLjlLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
  moviename : "Dream Girl 2"
},
{
  image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDIuN0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00354867-kgvtpsdvcv-portrait.jpg",
  moviename : "Subhedar"
},
{
  image :"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
  moviename : "Jailor"
},

{
  image : "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA3LjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-akxtqdbbwa-portrait.jpg",
  moviename : "Blue Beetle"
},
]

const couraselImgs = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692706486089_spidermendesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1690628905918_webbannernpa.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692770491661_lollapaloozadateddesktop.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1692178676624_sunburndesktop.jpg",

]




function App (){
   const [imgNo, setImgNo] = useState(0)
  return (

    <>
     <div className='app'>
      <div style={{display: "flex"}}>
      <button onClick={() => {setImgNo(imgNo - 1)}}>Prev</button>
      <img src={couraselImgs[imgNo]} alt="" />
      <button onClick={() => {setImgNo(imgNo + 1)}}>Next</button>
      </div>
    </div>
    
      <div className='mumbai'>
        <div>
        <Mumbai ></Mumbai>
        </div>
      </div>
      
      <div style={{display: "flex", gap: "20px", margin: "30px 80px"}}>
        {
          pune.map((x) => {
            return <Pune imgLink={x.image} cName={x.moviename}></Pune>
          })
        }
        
      </div> 
 <div className='xyzcss'>
   <Xyz></Xyz>
 </div>
  


      </>
    
  )
  
}

export default App ;
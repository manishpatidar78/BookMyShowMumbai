import './App.css';
// import Popularcities from './Popularcities';
const movies = [ 

{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTAwLjRLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-thncgdskxu-portrait.jpg",
  Moviename: "King of Kotha"
  ,
  Tag:"UA",
  language:"Malayalam , Kannada , Telugu , Tamil"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMDRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
  Moviename: "Jailer",
  Tag:"UA",
  language:"Tamil , Malayalam , Kannada , Telugu , Hindi"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTkuOUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg",
  Moviename: "RDX",
  Tag:"UA",
  language:"Malayalam , Kannada , Telugu , Tamil"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA3SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-akxtqdbbwa-portrait.jpg",
  Moviename: "Blue Beetle",
  Tag:"UA",
  language:"English , Hindi , Telugu , Tamil"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxMS41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363001-xgtxmsxmys-portrait.jpg",
  Moviename: "Voice of Sathyanathan",
  Tag:"UA",
  language:"Malayalam"

},

{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDIuMUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
  Moviename: "Gadar 2: The Katha Continues",
  Tag:"UA",
  language:"Hindi"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMDQuOEsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
  Moviename: "OMG 2",
  Tag:"UA",
  language:"Hindi"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICAxNTEuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-rruvehxwpe-portrait.jpg",
  Moviename: "Oppenheimer",
  Tag:"UA",
  language:"Hindi,English"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMTI4LjJLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-trnjveudsm-portrait.jpg",
  Moviename: "Rocky Aur Rani Kii Prem Kahaani",
  Tag:"UA",
  language:"Hindi"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICA0NC41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00072466-pzdcejeceq-portrait.jpg",
  Moviename: "Barbie",
  Tag:"UA",
  language:"English"

},


{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS8xMCAgMTUuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365396-qnqdtlfpwu-portrait.jpg",
  Moviename: "Ghoomer",
  Tag:"UA",
  language:"Hindi"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS42LzEwICAxNDUgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367000-rnxuzymwam-portrait.jpg",
  Moviename: "Digital Village",
  Tag:"UA",
  language:"Malayalam"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni44LzEwICA5MiBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365786-tsxzzbyvva-portrait.jpg",
  Moviename: "Jailer (Malayalam)",
  Tag:"UA",
  language:"Malayalam"

},

{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxMTkuNUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-gdlsqkwwld-portrait.jpg",
  Moviename: "Mission Impossible: Dead Reckoning - Part One",
  Tag:"UA",
  language:"English , Hindi , Telugu , Tamil"
  
  
},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAxLjJLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365979-fcewhegsgv-portrait.jpg",
  Moviename: "Corona Dhavan",
  Tag:"UA",
  language:"Malayalam"

},
{
  imges: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxOS40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358316-uzzgjdlpvr-portrait.jpg",
  Moviename: "Meg 2: The Trench",
  Tag:"UA",
  language:"English , Hindi , Telugu , Tamil"

},





]



function Kochi() {
  return (
<div className="bookmyshow">{
    movies.map((x) => {

      return (
        <div >
          
          <img src={x.imges} alt="" />
          <h2>{x.Moviename}</h2>
          <p>{x.Tag}</p>
          <p>{x.language}</p>
        </div>
      )
    }
    )
  }
    </div>

    )
  }
  
  export default Kochi;
  
  // < div className = "App" >
  //   {/* <Popularcities newcity></Popularcities> */}
  //   <Popularcities newcity={newcity[1]}
  //    ></Popularcities>
  //   <Popularcities newcity={newcity[2]}></Popularcities>
  // </div >
import './Mumbai.css'

const mumbaiMovies = [
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi4zSyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00362828-pzvktlfblk-portrait.jpg",
    movieName: "King of Khota(Hindi)",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC40LzEwICAyMDguM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00338629-adeyjbxpah-portrait.jpg",
    movieName: "Gadar 2 :The Katha Continues",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTMwLjJLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340111-tumdlxmhgw-portrait.jpg",
    movieName: "Dream Girl 2",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxMDguN0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361712-npjeqfmyrt-portrait.jpg",
    movieName: "OMG 2",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDQuOUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00354867-kgvtpsdvcv-portrait.jpg",
    movieName: "Subhedar",
    Tag: "UA",
    language: "Marathi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC8xMCAgMTI5LjFLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312549-trnjveudsm-portrait.jpg",
    movieName: "Rocky Aur Rani Kii Prem Kahaani",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxNi40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365396-qnqdtlfpwu-portrait.jpg",
    movieName: "Ghoomer",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICA3LjhLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331565-akxtqdbbwa-portrait.jpg",
    movieName: "Blue Beetle",
    Tag: "UA",
    language: "English, Hindi, Telugu,Tamil",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAzMTEuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331686-nwatwgbhjc-portrait.jpg",
    movieName: "Jailer",
    Tag: "UA",
    language: "Tamil,Hindi,Telugu, Kannada",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTYuN0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358718-zexhsfrnpb-portrait.jpg",
    movieName: "Gran Turismo",
    Tag: "UA",
    language: "English ,Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjAuOUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00350981-pdtrsldxdc-portrait.jpg",
    movieName: "3 EKKA ",
    Tag: "UA",
    language: "Gujrathi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjJLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365802-vpunclfums-portrait.jpg",
    movieName: "Akelli",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTExLjhLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351659-qfgbsaxudm-portrait.jpg",
    movieName: "King of Kotha",
    Tag: "UA",
    language: "Malayalam , Tamil , Telugu",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxNTIuMksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347867-rruvehxwpe-portrait.jpg",
    movieName: "Oppenheimer",
    Tag: "UA",
    language: "English, Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-My4xSyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363348-gylrfqhmfr-portrait.jpg",
    movieName: "Retribution",
    Tag: "UA",
    language: "English",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny45LzEwICAxOS41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00358316-uzzgjdlpvr-portrait.jpg",
    movieName: "Meg 2: The Trench",
    Tag: "UA",
    language: "English,Telugu,Hindi,Tamil",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi44SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364394-ebvyxelrsa-portrait.jpg",
    movieName: "Detective Conan: black lron Submarine",
    Tag: "UA",
    language: "Japanese",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mi44SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364394-ebvyxelrsa-portrait.jpg",
    movieName: "Barbie",
    Tag: "UA",
    language:"English",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICAyLjVLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357595-wspgmtrnnr-portrait.jpg",
    movieName: "Trailers Screening Show",
    Tag: "UA",
    language: "Multi Language",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OS40SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361074-zgbrlejczn-portrait.jpg",
    movieName: "Asteroid City",
    Tag: "UA",
    language: "English",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4zLzEwICA0MS4zSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355365-xjmeusensh-portrait.jpg",
    movieName: "Baipan Bhari Deva",
    Tag: "UA",
    language: "Marathi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny43LzEwICAzLjRLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00363638-walgrhqyaf-portrait.jpg",
    movieName: "Talk To Me",
    Tag: "UA",
    language: "English",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4xLzEwICAxMTkuNksgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00329481-gdlsqkwwld-portrait.jpg",
    movieName: "Mission Impossible: Dead Reckoning Part One",
    Tag: "UA",
    language: "English.Hindi,Tamil,Telugu",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzZLIExpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00349395-evaxtwdtlw-portrait.jpg",
    movieName: "Mastaney",
    Tag: "UA",
    language: "Punjabi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS4yLzEwICAyNS4xSyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00000652-slrtbaazup-portrait.jpg",
    movieName: "Dilwale Dulhania Le Jayenge",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-NC43LzEwICAxODYgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365676-gcwlcwjszl-portrait.jpg",
    movieName: "The Queen Mary",
    Tag: "UA",
    language: "English",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxOTcgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00365014-lugdgqqxav-portrait.jpg",
    movieName: "The Childe",
    Tag: "UA",
    language: "Korean",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni43LzEwICAyMDQgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00366014-wsdramuldt-portrait.jpg",
    movieName: "Non Stop Dhamaal",
    Tag: "UA",
    language: "Hindi",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjEuNEsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364397-vtjczctwmn-portrait.jpg",
    movieName: "RDX",
    Tag: "UA",
    language: "Malayalam ",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OC4ySyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00367150-xaabdbsawm-portrait.jpg",
    movieName: "Ramchandra Boss and Co.",
    Tag: "UA",
    language: "Malayalam",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjIuMUsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00361640-majgxvmwjx-portrait.jpg",
    movieName: "Gandeevadhari Arjuna",
    Tag: "UA",
    language: "Telugu",
  },
  {
    movieimgLink:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NC40SyBMaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00364640-qmsbjrjvgu-portrait.jpg",
    movieName: "Panch Kirti Five Elements",
    Tag: "UA",
    language: "Hindi",
  },
];

function Mumbai(){
     return(
          <div>
               {mumbaiMovies.map((y) =>{
                    return(
                        <div>
                         <div >
                              <img className='imgMumbai' src={y.movieimgLink} alt="" />
                              <h3 className='Mh3'>{y.movieName}</h3>
                              <p>{y.Tag}</p>
                              <p>{y.language}</p>
                          </div>
                          </div>
                    )

               })}
          </div>
     );
}
export default Mumbai;

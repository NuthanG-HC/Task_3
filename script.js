//movie title : Guardians of the Galaxy Vol. 2

document.getElementById('action').addEventListener('click',(e)=>{
    let param = document.getElementById("title").value
    if(param!=""){
    fetch(`https://www.omdbapi.com/?apikey=844a9c20&t=${param}`)
    .then(res=>res.json())
    .then(data =>{
         document.getElementById("img").setAttribute('src',`https://img.omdbapi.com/?apikey=844a9c20&&i=${data.imdbID}`)
          document.getElementById("lists").innerHTML= (`<ul>
          <li style="font-size:28px;
          font-weight:bold">Movie title:${data.Title}</li>
         <li>Year of release:${data.Year}</li>
         <li>IMDB rating:${data.imdbRating}</li>
         <li>Cast and Crew:${data.Director},${data.Writer},${data.Actors}</li>
         </ul>`)
       })
    .catch(err =>console.log(err));
      }
})

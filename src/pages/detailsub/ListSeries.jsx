// import React from 'react'

// const ListSeries = () => {
//     const [item, setItem] = useState([]);
//     useEffect(() => {
//         fetch(`http://127.0.0.1:8000/film/detail/${props.id}`,{
//           method:'GET',
//           headers : {
//             'Content-Type':'application/json',
//           }
          
//         }).then((res) => {
//           if (res.ok) return res.json()
//         }).then((res) => setItem(res)).catch((err) => console.log(err));
//       }, [])
//   return (
//     <div>ListSeries</div>
//   )
// }

// export default ListSeries
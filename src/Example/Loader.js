import React,{useState, useEffect} from 'react'

export default function Loader() {
    const [loader, setLoader] = useState(true);

    useEffect(()=> {
        setTimeout(() => {
            setLoader(false)
        }, 1000);
    })


  return (
<>
{loader ? (
    <div>...loading</div>
): "data get set"}
</>
  )
}

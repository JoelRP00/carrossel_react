import styles from "./Carrossel.module.css"
import {useState, useEffect, useRef} from "react"
function Carrossel(){
    const carrossel = useRef()
    const [data,setData] = useState([])
useEffect(()=>{
    const fetchData = () =>{
        fetch("/static/icon.json")
        .then(resp=>resp.json())
        .then(data=>{
            setData(data)
        })
        .catch(err=>console.log(err))
    }
    fetchData();
},[])
    function handleOnClickLeft(e){
        e.preventDefault()
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
        if(carrossel.current.scrollLeft === 0){
            carrossel.current.scrollLeft = 2914
        }
        
    }
    function handleOnClickRight(e){
        e.preventDefault()
        carrossel.current.scrollLeft += carrossel.current.offsetWidth
        if(carrossel.current.scrollLeft === 2914){
            
            carrossel.current.scrollLeft = 0;
            
        }
    }

return(
    <>
    <div className={styles.containerCarrossel} ref={carrossel}>
        {data && data.map((data)=>(
            <div key={data.id} className={styles.item}>
            <div className="img">
                <img src={data.image} alt={data.name} />
                <div className={styles.info}>
                    <span className={styles.name}>{data.name}</span>
                    <span className={styles.oldPrice}>Old price: U$ {data.oldPrice}</span>
                    <span className={styles.price}>price: U$ {data.price}</span>

                </div>
            </div>

        </div>
        ))}

        
        


    </div>
    <div className={styles.buttons}>
        <button onClick={handleOnClickLeft}><img src="/imgs/voltar.png" alt="voltar" /></button>
        <button  onClick={handleOnClickRight}><img src="/imgs/avancar.png" alt="avancar" /></button>
    </div>
    </>
)
}
export default Carrossel
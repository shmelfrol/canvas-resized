import "./app.css"
import {useEffect, useMemo, useRef, useState} from "react";
import {Canvas} from "./canvas/Canvas";

function App() {
    const ref = useRef(null);
    const [size, setSize] = useState();

    const containerSizes = useMemo(
        () => ({ width: size?.width || 0, height: size?.height || 0 }),
        [size],
    );
    const canvas = useRef(new Canvas(containerSizes));

    useEffect(()=>{
        //console.log(ref)
        const ro = new ResizeObserver(entries => {
            //console.log("entyres", entries)
            for(let entry of entries){
                setSize(entry.contentRect);
                // const width = entry.contentBoxSize
                //     ? entry.contentBoxSize.inlineSize
                //     : entry.contentRect.width
                console.log("size", size)
            }
        })
// мы можем следить за любым количеством элементов
        ro.observe(ref.current)
    },[])

    useEffect(() => {
        ref.current?.prepend(canvas.current.canvas);
    }, []);

    useEffect(() => {
        canvas.current.setSize(containerSizes.width, containerSizes.height)
    }, [size]);

    console.log("canvas", canvas)





  return (
    <div className="main">
     <div className="left">1</div>
        <div className="center">
            <div className="forcanvas" ref={ref}>

                canvas
            </div>
        </div>
        <div className="right">3</div>
    </div>
  );
}

export default App;

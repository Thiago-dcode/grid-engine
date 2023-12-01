import useComponetStyle from "./hooks/useComponetStyle";
import './app.css'
const page = {
  max: {

    size: 1400,
    columns: 9,
    componentSize: 1400 / 9,
  },
  xl: {

    size: 1200,
    columns: 7,
    componentSize: 1200 / 7,
  },
  l: {
    size: 992,
    columns: 7,
    componentSize: 992 / 7,
  },
  m: {
    size: 768,
    columns: 5,
    componentSize: 768 / 5,
  },
  s: {
    size: 576,
    columns: 3,
    componentSize: 576 / 3,
  },
  xs: {
    size: 480,
    columns: 1,
    componentSize: 480 / 1,
  },
};


function App() {

  const componentStyle = useComponetStyle(page);

  const arrayFrom = (num) => {

    let arr = []
    for (let i = 0; i < num; i++) {

      arr.push(i)

    }
    return arr
  }



  return (
    <main className="w-full flex items-center justify-center">
      <div style={{
      
      }} id='page-grid'>
        {arrayFrom(48).map((num, i) => {

          return <div style={componentStyle} className='border border-black component' key={`${i}`}>{`component ${num + 1}`}</div>

        })}

      </div>

    </main>
  )
}

export default App

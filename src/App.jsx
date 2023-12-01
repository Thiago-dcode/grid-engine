import useComponetStyle from "./hooks/useComponetStyle";
import './app.css'
const page = {
  responsive: {
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
  },
  components: [
    {
      order:1,
      responsive: {
        max: {

          col: {
            span: 3,
            start: 3,
          },
          row: {
            span: 1,
            start: 1,
          },


        },
        xl: {

          col: {
            span: 3,
            start: 3,
          },
          row: {
            span: 1,
            start: 1,
          },
        },
        l: {
          col: {
            span: 3,
            start: 2,
          },
          row: {
            span: 1,
            start: 1,
          },
        },
        m: {
          col: {
            span: 3,
            start: 2,
          },
          row: {
            span: 1,
            start: 1,
          },
        },
        s: {
          col: {
            span: 0,
            start: 1,
          },
          row: {
            span: 1,
            start: 1,
          },
        },
        xs: {
          col: {
            span: 0,
            start: 1,
          },
          row: {
            span: 1,
            start: 1,
          },
        },


      }


    }
  ]
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

        <div style={componentStyle} className='border border-black component' >{`component 1`}</div>

        {/* {arrayFrom(48).map((num, i) => {

          return <div style={componentStyle} className='border border-black component' key={`${i}`}>{`component ${num + 1}`}</div>

        })} */}

      </div>

    </main>
  )
}

export default App

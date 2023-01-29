import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AllAnimeData, fetchAsyncAnime } from '../redux/AnSlice';
import NotFound from './NotFound';
import { MdArrowDownward } from "react-icons/md";
import { BsSuitHeartFill } from "react-icons/bs";
import './SearchPage.scss'
function SearchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncAnime())
  }, [dispatch])

  const AnimeResult = () => {
    const temp = useSelector(AllAnimeData)
    return temp
  }
  return (
    <>
      <p>Total {Object.entries(AnimeResult()).length} matching anime characters</p>
      <div>
        {Object.entries(AnimeResult()).map(([index, values]) => {
          return (
            <div key={index}>
              <div className='eachRes'>
                <img src={values.images.jpg.image_url} alt="" style={{ height: "150px", margin: '10px' }} />
                <div className='animeName'>
                  <h3 style={{ display: "flex" }}>{values.name}</h3>
                  <p style={{ display: "flex" }}>{values.name_kanji}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr", width: '300px', borderRadius: '15px', gridGap: '5px' }}>
                    {
                      (values.nicknames) ? values.nicknames.map((names, index) => {
                        return <p key={Math.random()} style={{ border: '1px grey solid', borderRadius: '15px', backgroundColor: '#44d6e3', width: '150px' }}>{names}</p>
                      }) : ''
                    }
                  </div>
                </div>
                <p><BsSuitHeartFill color={'red'} size={50} />{values.favorites}</p>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <MdArrowDownward size={70} style={{ display: 'grid', placeItems: 'center' }} />
                </button>
                <div>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:'#C0C0C0'}}>
                      {values ? values.about : 'No information available'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      {
        (AnimeResult().length === 0) ? (
          <div>
            <NotFound />
          </div>) : ''
      }
      </div>
    </>
  )
}

export default SearchPage

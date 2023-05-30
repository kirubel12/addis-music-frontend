import styled from '@emotion/styled'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


        const Heading_one = styled.h1`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-family: 'Poppins';
        font-weight: 600;
      `
        const AddInput = styled.input`
        background: #f3f1f1;
        font-family: 'Poppins';
        border-radius: 10px;
        padding: 15px;
        border: 0;
        width: 460px;
        margin-bottom: 20px;
    `
    const AddButton = styled.button`
      background: #6E4B4C;
        color: #dfdfdf;
        cursor: pointer;
        padding: 10px 5px;
        margin: 0;
        outline: none;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        font-family: 'Poppins';
        font-weight: 600;
        width: 100%;
      
      `
export default function AddSong(){
     const dispatch = useDispatch();
    const [song, setSong] = useState({
    title: "",
    artist: "",
    gener: "",
    album: "",
    year: 0
  });
  const handleSubmit= (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();
    console.log(song);  
    dispatch({type: "ADD_SONG", payload: song});
    toast.success("Successfully added 👍👍",{
                autoClose: 500,
                theme: 'dark'
                
            })
    dispatch({type: "FETCH_SONGS"})      
    
    
  }
 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   
  setSong({...song, [event.target.name]: event.target.value});
};
  
   const {title, artist, gener, album, year} = song;
    return (
        
        <div>
          <form onSubmit={handleSubmit}>
            <Heading_one>Add a new song</Heading_one>
                <AddInput onChange={handleChange} value={title} required name="title" type="text" placeholder="Enter title" />
                 <AddInput onChange={handleChange} value={artist}  required  name="artist" type="text" placeholder="Enter artist" />
                  <AddInput onChange={handleChange} value={gener}  required name="gener" type="text" placeholder="Enter genre"  />
                   <AddInput onChange={handleChange} value={album} required name="album" type="text" placeholder="Enter album" />
                    <AddInput onChange={handleChange} value={year} required name="year"  type="number" placeholder="Enter year" />
                   <AddButton>Add Song</AddButton>
              
            </form>    
        </div>
    )
}
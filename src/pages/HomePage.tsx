import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";

import {useEffect} from 'react'
import AddSong from "../components/AddSong";

type SongInterface = {
   
    title: string,
    artist: string,
    album: string,
    gener: string,
    year: number
}

export default function Home() {
 const  Songs = useSelector((state) => state?.songs)
 const {data,loader,error }=Songs
  const dispatch = useDispatch()
  console.log(data,error,loader)
 useEffect (() => {
    dispatch({type:"FETCH_SONGS"})
  },[])
    const Button = styled.button`
      background: #6E4B4C;
        color: #dfdfdf;
        padding: 15px 5px;
        margin: 0;
        outline: none;
        border-radius: 5px;
        border: none;
        font-size: 15px;
        font-family: 'Poppins';
        font-weight: 600;
      
      `
        const AddSongCard = styled.div`
        width: 600px;
        background: #fff;
        padding: 20px;
        border-radius: 20px;
        max-width: 500px;
        position: fixed;
        top: 12;
        max-height: 80vh;
        
      `
      const DIV = styled.div`
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 10px;
        margin-top: 90px;
        padding-right: 20px;
      `

      const Input = styled.input`
        width: 219px;
        font-family: 'Poppins';
        border-radius: 10px;
        padding: 15px;
        border: 0;
      `

      const Container = styled.div`
        display: flex;
        justify-content: space-between;
       
        gap: 10px;
        margin-left: 20px;
        margin-right: 20px;
       
      `
      
    
  

      const SongCard = styled.div`
        max-height: 40px;
        background: #fff;
        padding: 30px;
        border-radius: 10px;
        width: 700px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 9px;
      `

      const SongContainer = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px;
        position: absolute;
        right: 0;
        
      `
    
    return <div>
        <Navbar />
        <main>
           <DIV>
            <Input type="text" placeholder="Search" />
            <Button>Search</Button>
           </DIV>
           <Container>
            <AddSongCard>
               <AddSong />
            
            </AddSongCard>
            <SongContainer>
          {data && data.map((song:SongInterface) => {
            return <SongCard key={song._id}>
                <h3 className="text-lg font bold w-[25%] gap-4 mr-4">{song.title}</h3>
                <h3 className="text-lg w-[25%] gap-4 mr-4">{song.artist}</h3>
                <h3 className="text-lg w-[25%] gap-4 mr-4">{song.album}</h3>
                <h3 className="text-lg w-[25%] gap-4 mr-4">{song.gener}</h3>
                <h3 className="text-lg w-[25%] gap-4 mr-4">{song.year}</h3>
                <button className="bg-red-600 text-white px-2 py-2 text-base rounded-md">Delete</button>
                <button className="bg-blue-600 text-white px-2 py-2 text-base ml-4 rounded-md">Edit</button>
                
            </SongCard>
          
          },) 
          }
            </SongContainer>
           </Container>
        </main>
    </div>;
}
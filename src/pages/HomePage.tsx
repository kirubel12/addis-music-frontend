import styled from "@emotion/styled";
import Navbar from "../components/Navbar";

export default function Home() {

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
        margin: 20px;
       
      `
      const AddSongCard = styled.div`
        width: 600px;
        background: #fff;
        padding: 20px;
        border-radius: 20px;
        max-width: 500px;
        position: fixed;
        top: 12;
        max-height: 70vh;
      `
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
      const SongCard = styled.div`
        max-height: 40px;
        background: #fff;
        padding: 20px;
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
            <Input type="text" />
            <Button>Search</Button>
           </DIV>
           <Container>
            <AddSongCard>
                <Heading_one>Add a new song</Heading_one>
                <AddInput type="text" placeholder="Enter title" />
                 <AddInput type="text" placeholder="Enter artist" />
                  <AddInput type="text" placeholder="Enter album" />
                   <AddInput type="text" placeholder="Enter genre" />
                   <AddButton>Add Song</AddButton>
            </AddSongCard>
            <SongContainer>
            <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
            <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
             <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
             <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
             <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
             <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
             <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
             <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
             <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
             <SongCard>
                  <h1>Artist</h1>
                  <h1>Album</h1>
                  <h1>Title</h1>
                  <h1>Gener</h1>
            </SongCard>
            </SongContainer>
           </Container>
        </main>
    </div>;
}
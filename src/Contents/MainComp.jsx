import NftCardCompt from '../Components/NftCardComponent'
import NftData from '../Data/Nftdata'

function MainComp() {

    const NftElem = NftData.map(data => {

        return(

            <NftCardCompt
             key={data.id}
             {...data}
            />
        )
    })
  return (
    <main>
        {NftElem}
    </main>
  )
}

export default MainComp
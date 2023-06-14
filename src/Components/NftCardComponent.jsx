import '../Style/Main.css'
import PropTypes from 'prop-types';
function NftCardComponent(props) {

  return (
    <section className='nft-card-section'>
      <div className='nft-card-wrapper'>
        <div className='nft-img-cont'>
            <img src={props.nftImg} alt="" />
            <div className='eye-sight-overlay'>
              <img src="icon-view.svg" alt="" />
            </div>
        </div>
        <div className='nft-details-cont'>
            <h1>{props.nftName} #{props.nftNumber}</h1>
             <p>{props.nftDescription}</p>
             <div className='details-flex'>
             <h2>
               <img src="icon-ethereum.svg" alt="" /> {props.nftValue} ETH
            </h2>
             <p><img src="icon-clock.svg" alt="" />{props.nftDaysLeft} days left</p>
            </div>
        </div>
        <div className='nft-creator-cont'>
            <img src={props.nftCreatorImg} alt="" />
            <p>Creation of <span>{props.nftCreator}</span></p>
        </div>
      </div>
    </section>
  )
}
NftCardComponent.propTypes = {
    nftImg: PropTypes.string.isRequired,
    nftName: PropTypes.string.isRequired,
    nftNumber: PropTypes.number.isRequired,
    nftDescription: PropTypes.string.isRequired,
    nftValue: PropTypes.number.isRequired,
    nftDaysLeft: PropTypes.number.isRequired,
    nftCreator: PropTypes.string.isRequired,
    nftCreatorImg: PropTypes.string.isRequired
  };
export default NftCardComponent
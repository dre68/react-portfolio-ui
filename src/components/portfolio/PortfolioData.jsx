import portfolioLogo from '../../assets/portfolio_logo.png';
import nftLogo from '../../assets/nft_logo.png';

const PortfolioData = () => {

    const data = [
        {
          id: 1,
          imageUrl: portfolioLogo,
          title: 'React Portfolio UI',
          github: 'https://github.com/dre68/react-portfolio-ui'
        },
        {
          id: 2,
          imageUrl: nftLogo,
          title: 'React Dropsystem UI',
          github: 'https://github.com/dre68/react-dropsystem-ui',
          demo: 'https://master.dbrof6a5psh6l.amplifyapp.com'
        }
      ]
      
  return {data}
}

export default PortfolioData
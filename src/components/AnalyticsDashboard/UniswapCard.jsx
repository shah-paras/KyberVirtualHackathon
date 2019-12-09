import React from 'react';
import { Asset, Card, Modal, Text } from '@mydefi/ui';
import PropTypes from 'prop-types';
import { getTokenReserves } from '@uniswap/sdk';
import numeral from 'numeral';
import Colors from './Colors';

const ICON =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAYAAADnoNlQAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAETNJREFUeJztnY1127YWx7vB0wbhBtUG4QbxBuEG1gKSuYG1gbWBtIG4gZSXNG2a9EnNh/Nd0okTJ0179P5XBG0IAkiQBPhh8Z7zP05PTRAkfgYugIvLn37qrLPOOuuss86+DiMPmkNHddelsxz2aXjhQCuoX6YcNLwDbTi5hqrYmW37NPx0BG0YCL2i5XyJewEeghAqXF5r7fXwSx9avBl+mUP3666PjgEAP4ZgC8K4aDlfhhf+l10ISL7BqrbDAIALhZAHCFZMjYbhYvgpuLiGYAuCU6QcQBBAGwLhS9cbfBlDZ/RvAOBDIYOhkc4SAFgQBBwIkyLlAIBVDMEeCL7ZGrfEAMGSA8Fhw8OG/XRqrt6OJQAIIDh5y7m8BmAPhIPtDRwoSkAgexMPESGD4eTt8LL2FxOhsSMBgosCvQEA6BEE+yBcJCB4dp6g4XYe+wcbAYQeNGEgrN7W7C8AAJcgkIAQAgRtSNH4bgKBAoSFzedotAGEgQgCGQDoJ0MEQJijVyg1Ry9qaHwvgUACgqdbjgiBHIbIsfckDTeAMGEgnIj/DxC4b7YQEAyXZ1UPESGmhzwEAgjaf72fhxdHnyUQCCAUnn623gBB7zx2FAkEaffPnMcxIAihPVhsGSAYhwIEAgyOTjkAwCcIMkBYWX6cZhsgcKDoPAUEMuoZ0CsQCPAXLq1PKQFAQBCkgDDRKQeNP04gyAChlmGvMQYA+gSBBgh9gLAABDREWPUXwuHnBbTJAMHJKufT8CLgIVCBcMkNCQCiBz/h7sH5CgDA40C4q/o9mkUwh3HDZMVf+GsLQKJPKhhoMUl5b9pvgGilcSOCIIHhekiIIdhbWJoznUEn0P0rgHJ120ABAD4DgZaX76T9LvMTEhC2/sI7QzAAAIcg0ASBNAUMJ5ymmEbOoRVbbtYFwUnqoFhq3tNVrBCaQycEhol3UKvRjIGBkOmBMz9hxcGwAgil1xfQ+G4CwS4MqSDIFpb4fQcdEAZJHQDAQLKwlAYCL4Li7Nswulf2XdRir0ZftzMGBkLmbIANDz4HwgYgzCG3aB0+Dj8PPgoQyHoFHRAu8oEQJHWgXkG2wqiCQQLCVgBhBTV6o05qDISIgaDVvb3d9grbYYGH4Qxy8t4fAIwJAh0QZDDogKCCga8HQFim7DvkASGBwc37Lmo1gNBnIITQzzrXxLOHPRDCdzn9BTR+kEBgB4TUXuF6xkMzBsUKY97hgYehsrUWIwYQjs5HXzesR5hCcyh1nKMYBbbKyINA0vYXPnAAqECw6Cdc+wU0JGTsOxQFYfGtTbuXAMF7dQPCFoasa95sfQQpCKRFmr8AAPoEQT4QjPoJE74+yZCQBkLB4aF1IEw4EGh4+E/WNWxhiV9PEGGQOo8fhpdeAoEMhAr8hICvD/7b09iAKuMnOMYayrYBghkHQmZvkFg8jbycK0DYwvCeGybw7zlA2PAg6PQKJkEQnwEgRGVAUMHQuh6BZgzQcgtCDMNZ9lU3RvsNvNMogLB5HytkPzcfrqUPgkE/YadRkk2obBAK+wlzs61l0RgIEYHAeoWpztCQ2Fth9iCCwMGw2YWhCAj5/AQBBJevNwDoUW9gGYT2bGfT1FEAIWSzBvr3adb1AOE0xU8oBIKFhSVXrDfNGjI2oEz4CY0M+JVaMmPgQOCV2rXBR5iKM4ciIFj2E1xZ3QHAWnNbuqifELbGPyBD4w9SQJD6CwDgDothPGMO4yQ/CJX4Ca5Y909xhNKRzrZ0SRDa4x+QvWRTx2sQdmHYA4GdgNqJ4mHLzQtdEMr5CdoguHwdKcydOYwOGn6WH4TcfsLgpzYZQAh4EIRe4Tj5PQpoVYWxvd1uQt2A0AA/weXrR8MDcxgnLEYh0gxUKeon0C5keyKdAEHvJZs6KkC4T2IAkKSzCQaCLYdxDQU5/ISdcfniGoL4KBwNDZrxCWVAaFcoPCBwXnIzBoWfsIUgrRzyFYqBkDk8hFAP8jVAWIv1Igi4mcN2oQwQzGyAIMDQnmkjGSDoQ5uXIgj7MCgjlgDBKTvvkAWCBy1z+gk+3QM/vQw/wRfrlUDAgUBH5rfDQnEQtP2E9kwbyQCAJwNB6BUWqgWmN7HjuMkAIaLfpa3pvCBALl3LIpciSa8QRZKYRR4C7hRUP4ZBO3St6AZU2Lo4RgDga4Cwt/dAwa0JACoQGAyT5JoCIITQtpG54SFiIKwBgdQZi/YhIK0YCMusQBUDfkK7/AMyADDTAGFnCgkI5lCAxl/vw7ADwk73KAFhAhCilIUl7c2vxKh3UCwshTfBrLkCWov4Cbn2amq3ZMagBOEGBlpu/vn8ZvpIJ6a91wIEfK+guica34ciqA/1AMIAWitAyD3OGg5oLeoneKUapmp7wTmKGr0CaZJcSz2CCoS89QAIRwBgDAUMhKgsBAYCWsv4Ce1ZPyADCIMcIDjJdQCgx3Io7IFQ17PQsTiTAa0lhgdyFNuzv0AGENYaIHjidSzRlgwEp/qn2EIwMx3ZXAKExdc2gQAIvBcCBBwItMCk7JoZCMmp6QQCr8LqXxsdlbd88CWvn9AuR5EgEECI2FQyk2Y2NMw4ECYVVHnPMIV0Swaq2AChHSuKz9HQCQQ0NDA/IXdXBgCOoDWl4bNRTx0zFdksg6HEBpRX1/vQtuejKwcg+DRbMFHe65qGA7K/hp9ntk9AFQShXTOGNpvGvkNFw8MeCIeZio83loJvyhJuUZ6l4+yrihnblm4ACHt+QrsikkwZcxrnioUlOjLvmr4n3xuYPAFlyE/wTT9vo+08BmDBBaucsSRbSe7mZKnZM33vJEClqpPSOUE4HP8gyaHAQTCF7r2JdyOPhQ0o1+S9P8aZVKIKT0rnAaF9O45F7BzTTFnUEi9heDCeog4g9Cs8KZ3XT/BNP2/jLDn8khME490kBal8FHqEijKq6GxAOaaftzGGxnez4hgVIPg26kM9wkduxtAgP2Fi43kbYS8FCHKA4NuqE0UrQZMGgnA71w4IgoxAFRUMnu26fYxjFxW9Qi1+gvVnrsVY1JJuoAoPgVNF/T7GsYuzhvgJkyqeuRbjg1k1QQiqriNFL2VNI00uLClguL2Ju18IMYwZIETnNQWisGmk4fWE3CDU8uyVmBYImEqe1/yRL9Yj1Lme0K7DK0WMHXiJJDCsXxnavi5rsimkoYwqOiD4dT9/ZYbGP6Kj8nRKmnyGVwUCV2wZTR8tZVTR2YAK6n7+zn7aQuBXmIJP1O11DttkHwQIKs7QWluYfmecEQQpGVUW0NwyCG7d7+DgLTn9JAFhAd2twE9w634HB23sXKTscCwBcIf9tO0n+HW/h4M2llBDzKiy+BBvOp1VlNLfr/s9HKy9j4/Nr4T8CQTAHeiswlS9gZEH+m30t2OkoAOyd8PLsZBniXI332MgVJmhNSj9MACgD4XQpHRhB2Jo/CNJwq1VjtQ6JoeHcmsFv94AsGFqzEpck+3t8HKpyLy2hoL322wq1aXqLfwgAKAHLX69AYDUrmybNRlL7T9D4weUZwkavOO+KKtwGK2l6i38IGj8KQGQiEHQLUMaMj7XUgUp/fP34I/xF88DIIDgmn8lh2dJb1BHqt5MAwB9aPNYAgHTxMpbOTBjmdeiilL6u9oV+2X0o/d49GOVQJACg2Pt7RyQ0TSyopT+rnalAMEUQsMnUoIwsfZmDsjoC7LmU/pLhwdXq0Jo/AEBkEgDBMfqG2qJ0eFY+vQPi2p2817PZg+2U/pn1+vR6EefB0AThEn+V3a7DI3vQisustnPWwb5BpSz2SYIoSYEi0cSCHZhkPoJjYjjq8Nejb6eSELc/SJlofF9y5/+8VIrgMYfEwCJcoJwcBky2AGYqeIElFe0XDT+2uKnf1zljR+Ofrg8AHog7A0Ptz+smRn7wMci5byDU7RsyqNg8dM/rvSmAKAHrR5KIEiDQQJC+OsB7ClQBjYoTMnQui57D0AwtgSCK70hGn9MACQqCULuFPJtMpaZNZQk5uRB8MveBwDQt6CWFj4R6O7d7OHonz4PQBEQJH6CV/YlNNGej65On98k5NyoQKChwsT9AEDfwicC3b0b/Xf0zxwgbGKZAGELQ/j4Fs0W/hxd9QDAFNokEkHgYJiZvDcA8E1+U5rORe7cAAC40CaRDIQSwwOB0Hr/AAC4UPgnB8CNpCC4pusAANamPhG4Vzj1AjwEFkBYtBWENf76oVNqfFEpIAQ26kLp+Ex9U3qn4AfwBUQATILwS4tBQOMfQStok0gTBGtDoOYnAjMdxp1CAcH4gQKCGxCM+QmtAGE1+uZC8xUadsUBoAfCldV084BgpgNCRq+w3ikUACwIgjQQDA8PqyY6i/8bfetB96EVhMbnpQ3CGrIKOSXcyvhEoA4IwU6hCQAVg0DOYu2rin+g4aH70Bk1vKgCILi268xDUAKEYKdQEYIqQOD8hLMqh4dno+93ofvQ6bPRtwUafyMqLwgcDJV8dYR2JeUJvHOBEOwUKoMgCwazIGyHB9fEC/p99N2B7kLH0MnT0fcpNIdCaEN6tqN9CHRAkMAQZFbOkCUQpH0rUgOE3fouUyAw2StoLCxNH2sGpdDpJ+jek9HfJ9AUWjxBo5J+l+ipIBEEGQzpIOz0Csu1ZT+ANzT+JCVVr+7wEOwUCgjWVYGgubB0IsJAMQrQMYW8U4g7d+YBDc9LH4SnBUBQDA+VOrkUsJKRs1kHhGCnUAAwIQjqBkGy70DDxDwlzH0jh+G7EoYiIGT0CpV+fYy2pVWpenP6Cb4IgZdAUAYGSyAow9ztgJDbT6i2Fxh99XNmclf5Cf5e4Wj4yBwIRv2EEiDkGx6K+AlVAkDZ16BQkaH1Lv3OaxbcqjE8SCGYiBDUPTwYACGI9Z00QcP7gtynggDAICcIlTmEr+I0fLIMrddxG+xrLzo9ghQCRwZBE0HgYIigAPIhj47Clc2ZABD6Of2ESha8XsZfnA8VqXpP6Hfw8+esoYHzE3zpjVS9QRYIFfsJSzoTaXPZOaefYN0xZEGs6hjG0dd7AOCOEOae5SfI670Y/avsDWz4CTlAiCAfIDi2XzgZAAhy+AnWP9H7AgAowtcoutmB7pKvkNNhDJQ3BAjj5ehf4yAU7BWo8T2o0l1HNL6f02H0bNSDfVN6oQhfO4buoPHPFH7C5Dz+lrQKhEB5Y0DQg6KaQYgg/1HFjZ8YcxjzrCcYP2fxfHR1DIWSiCWKbL4Hnb5kUc7C8LCTxf2c+7q8AEKQWgFAcARtFiVAKOEnBI8q6vZVBgh6BdYTXBP3/hOND60UgSoU2TxNiWyeiEm82ZnISLKwFGRWBgDMdEAw6CdEkGfiRZowQLDMuZ5QqjdYj64cNP4iJVBFFdC6Zl99cVRlA4KBxE/I/mBmMizcgGB1eJg9rKnrVxkaf1xgYanwdJEggKKMiCXqFdZo/Bk0yBPCRsOCCILWhWj8fgKBJRDWkFv0xdk0NPxRgX2H8I8Sy8gsoJUimn1OAwpUKRuswoaFpQCC3h8eGt/jQSjjJwiN75V5KNv2BH5BwX2HsEyPYNPO0XOw7z8lILjaF6PhXWitC0IKDMsHDW983gDBssQG1OkfFS4p69qrGISkR8iXepD5CH4BPyGCJg8a2u2n2ZPR337JDSjqFY7rfg7RaAbBnMXiPRabQk6od1CAsITGUCO7RV0DBH1DgSorCmat+3msGS0103CBBt+q7vqYNkCwNhiosmqqv9BZiv22HRKMB6rMm+gvdKYwSt5tKVAle7Gms+YYIBhbAGFS93N1lsNYb7BUxTHmdBjXzzq/oJ2WBYKGnxDRFnXdz9FZSWMgzPKAAK1ZfELnCN4m+y2OZ4wy/IQA8uqua2eWjcFAPUN0E938fQA5ddets84666yzzjrrLI/9H3iF4nYpbwl9AAAAAElFTkSuQmCC';

class UniswapCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      token: '',
      exchange: '',
      ethReserve: '',
      tokenReserve: ''
    };
  }

  componentDidMount = async () => {
    const tokenAddress = '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359'; // DAI Mainnet
    const tokenReserves = await getTokenReserves(
      tokenAddress,
      this.props.web3.currentProvider
    );
    this.setState({
      token: tokenReserves.token,
      exchange: tokenReserves.exchange,
      ethReserve: tokenReserves.ethReserve,
      tokenReserve: tokenReserves.tokenReserve
    });
  };

  toggleModal = () => {
    const isModal = this.state.showModal;
    this.setState({
      showModal: !isModal
    });
  };

  render() {
    return (
      <Card title="Uniswap" description="Uniswap Liquidity" onClick={this.toggleModal}>
        <Asset icon={ICON} size="30px" symbol="COMPOUND" />
        <Modal
          title="Uniswap Assets"
          visible={this.state.showModal}
          onClick={this.toggleModal}
          width="800px"
        >
          <Text size="20px" color={Colors.textPrimary}>
            Token: {JSON.stringify(this.state.token.address)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            Exchange: {JSON.stringify(this.state.exchange.address)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            ETH reserve: {JSON.stringify(this.state.ethReserve.amount)}
          </Text>
          <br />
          <Text size="20px" color={Colors.textSecondary}>
            Token reserve: {JSON.stringify(this.state.tokenReserve.amount)}
          </Text>
        </Modal>
      </Card>
    );
  }
}

UniswapCard.propTypes = {
  selectedAddress: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  web3: PropTypes.object.isRequired
};

export default UniswapCard;

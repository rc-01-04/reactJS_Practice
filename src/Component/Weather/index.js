// 클래스로 모듈 만들기
import React from 'react'


const API_CITIES = 'http://localhost:8080/weather-crawler/available-cities'

class Weather extends React.Component {
    state = {
        cities:null,
        me : '안녕 me',
        you : '안녕 you'
    }

    // this.state.me = 'Hello World' 랑 같음.
    // 그래도 아래처럼 사용하는게 좋다
    // 컴포넌트가 호출되면 바로 수행
    /*
    componentDidMount() {
        console.log("CDM!!");
        console.log(this.state.me);

        // 2초 후 변경
        setTimeout(() => {
            this.setState({
                me : 'Hello World'
            });
        }, 2000);

        console.log(this.state.me);
    }
     */

    async componentDidMount() {

        // 링크에서 데이터 가져오기, awit : 끝날때까지 기다릴거야
        const city_list = await fetch(API_CITIES)
            .then(res => res.json())
            .then(data => data);

        console.log(city_list);

        // 가져온 데이터를 cities로
        this.setState( {
            cities: city_list
        })
    }

    // 렌더는 바로 시작한다. 따라서 처음에 cities는 null
    render() {
        // cities는 배열
        const { cities } = this.state;

        // cities가 null 경우
        if(!cities) {
            return <div> Loading...</div>
        }

        return (
            <div>
                <ul>
                    {cities && cities.map(
                        item => {
                            // 나오는 아이템마다 item과 같은 키로, li 태그로 넣기
                            return <li> <button>  {item} </button></li>;
                        }
                    )}
                </ul>
                { cities }
            </div>
        );
    }
}
export default Weather;
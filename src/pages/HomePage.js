// import logo from './logo.svg';
import Section1 from '../component/Home/Section1';
import Section2 from '../component/Home/Section2';
import Section3 from '../component/Home/Section3';
import Section4 from '../component/Home/Section4';
import Section5 from '../component/Home/Section5';
import Section6 from '../component/Home/Section6';
import Section7 from '../component/Home/Section7';


function Home() {
    return (
        <div className="App font-raleway overflow-x-hidden">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
        </div>
    );
}

export default Home;

import { useState } from "react";
import Dice from "./Dice";
import DiceClick from "./DiceClick"
import "./LeaderBoard.css"

const LeaderBoard = () => {
    const [randomNumber, setRandomNumber] = useState();
    const onDiceRollEvent = ()=>{
        console.log("jo");
        setRandomNumber(Math.floor(Math.random() * 6) + 1);
    }
  return (
    <>
    <div className="tile-row">
      <div className="tile" data-id="100">
        <span className="tile-number">100</span>
      </div>
      <div className="tile" data-id="99">
        <span className="tile-number">99</span>
      </div>
      <div className="tile ladder-left-end" data-id="98">
        <span className="tile-number">98</span>
      </div>
      <div className="tile ladder-right-end" data-id="97">
        <span className="tile-number">97</span>
      </div>
      <div className="tile snake-left-end" data-id="96">
        <span className="tile-number">96</span>
      </div>
      <div className="tile snake-left-anlge" data-id="95">
        <span className="tile-number">95</span>
      </div>
      <div className="tile" data-id="94">
        <span className="tile-number">94</span>
      </div>
      <div className="tile" data-id="93">
        <span className="tile-number">93</span>
      </div>
      <div className="tile" data-id="92">
        <span className="tile-number">92</span>
      </div>
      <div className="tile" data-id="91">
        <span className="tile-number">91</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile" data-id="81">
        <span className="tile-number">81</span>
      </div>
      <div className="tile" data-id="82">
        <span className="tile-number">82</span>
      </div>
      <div className="tile" data-id="83">
        <span className="tile-number">83</span>
      </div>
      <div className="tile ladder-middle" data-id="84">
        <span className="tile-number">84</span>
      </div>
      <div className="tile" data-id="85">
        <span className="tile-number">85</span>
      </div>
      <div className="tile snake-middle" data-id="86">
        <span className="tile-number">86</span>
      </div>
      <div className="tile" data-id="87">
        <span className="tile-number">87</span>
      </div>
      <div className="tile" data-id="88">
        <span className="tile-number">88</span>
      </div>
      <div className="tile" data-id="89">
        <span className="tile-number">89</span>
      </div>
      <div className="tile" data-id="90">
        <span className="tile-number">90</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile" data-id="80">
        <span className="tile-number">80</span>
      </div>
      <div className="tile" data-id="79">
        <span className="tile-number">79</span>
      </div>
      <div className="tile" data-id="78">
        <span className="tile-number">78</span>
      </div>
      <div className="tile ladder-middle" data-id="77">
        <span className="tile-number">77</span>
      </div>
      <div className="tile" data-id="76">
        <span className="tile-number">76</span>
      </div>
      <div className="tile snake-tail" data-id="75">
        <span className="tile-number">75</span>
      </div>
      <div className="tile" data-id="74">
        <span className="tile-number">74</span>
      </div>
      <div className="tile" data-id="73">
        <span className="tile-number">73</span>
      </div>
      <div className="tile ladder-left-end" data-id="72">
        <span className="tile-number">72</span>
      </div>
      <div className="tile ladder-right-end" data-id="71">
        <span className="tile-number">71</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile snake-right-angle" data-id="61">
        <span className="tile-number">61</span>
      </div>
      <div className="tile snake-right-end" data-id="62">
        <span className="tile-number">62</span>
      </div>
      <div className="tile" data-id="63">
        <span className="tile-number">63</span>
      </div>
      <div className="tile ladder-middle" data-id="64">
        <span className="tile-number">64</span>
      </div>
      <div className="tile" data-id="65">
        <span className="tile-number">65</span>
      </div>
      <div className="tile" data-id="66">
        <span className="tile-number">66</span>
      </div>
      <div className="tile" data-id="67">
        <span className="tile-number">67</span>
      </div>
      <div className="tile" data-id="68">
        <span className="tile-number">68</span>
      </div>
      <div className="tile ladder-middle" data-id="69">
        <span className="tile-number">69</span>
      </div>
      <div className="tile" data-id="70">
        <span className="tile-number">70</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile snake-middle" data-id="60">
        <span className="tile-number">60</span>
      </div>
      <div className="tile" data-id="59">
        <span className="tile-number">59</span>
      </div>
      <div className="tile" data-id="58">
        <span className="tile-number">58</span>
      </div>
      <div className="tile ladder-start" data-id="57">
        <span className="tile-number">57</span>
      </div>
      <div className="tile" data-id="56">
        <span className="tile-number">56</span>
      </div>
      <div className="tile" data-id="55">
        <span className="tile-number">55</span>
      </div>
      <div className="tile" data-id="54">
        <span className="tile-number">54</span>
      </div>
      <div className="tile" data-id="53">
        <span className="tile-number">53</span>
      </div>
      <div className="tile ladder-start" data-id="52">
        <span className="tile-number">52</span>
      </div>
      <div className="tile" data-id="51">
        <span className="tile-number">51</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile snake-middle" data-id="41">
        <span className="tile-number">41</span>
      </div>
      <div className="tile  ladder-left-end" data-id="42">
        <span className="tile-number">42</span>
      </div>
      <div className="tile ladder-right-end" data-id="43">
        <span className="tile-number">43</span>
      </div>
      <div className="tile" data-id="44">
        <span className="tile-number">44</span>
      </div>
      <div className="tile" data-id="45">
        <span className="tile-number">45</span>
      </div>
      <div className="tile ladder-end" data-id="46">
        <span className="tile-number">46</span>
      </div>
      <div className="tile" data-id="47">
        <span className="tile-number">47</span>
      </div>
      <div className="tile snake-left-end" data-id="48">
        <span className="tile-number">48</span>
      </div>
      <div className="tile snake-left-anlge" data-id="49">
        <span className="tile-number">49</span>
      </div>
      <div className="tile" data-id="50">
        <span className="tile-number">50</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile snake-tail" data-id="40">
        <span className="tile-number">40</span>
      </div>
      <div className="tile ladder-middle" data-id="39">
        <span className="tile-number">39</span>
      </div>
      <div className="tile" data-id="38">
        <span className="tile-number">38</span>
      </div>
      <div className="tile" data-id="37">
        <span className="tile-number">37</span>
      </div>
      <div className="tile" data-id="36">
        <span className="tile-number">36</span>
      </div>
      <div className="tile  ladder-middle" data-id="35">
        <span className="tile-number">35</span>
      </div>
      <div className="tile" data-id="34">
        <span className="tile-number">34</span>
      </div>
      <div className="tile" data-id="33">
        <span className="tile-number">33</span>
      </div>
      <div className="tile snake-middle" data-id="32">
        <span className="tile-number">32</span>
      </div>
      <div className="tile" data-id="31">
        <span className="tile-number">31</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile" data-id="21">
        <span className="tile-number">21</span>
      </div>
      <div className="tile ladder-middle" data-id="22">
        <span className="tile-number">22</span>
      </div>
      <div className="tile" data-id="23">
        <span className="tile-number">23</span>
      </div>
      <div className="tile" data-id="24">
        <span className="tile-number">24</span>
      </div>
      <div className="tile" data-id="25">
        <span className="tile-number">25</span>
      </div>
      <div className="tile ladder-middle" data-id="26">
        <span className="tile-number">26</span>
      </div>
      <div className="tile" data-id="27">
        <span className="tile-number">27</span>
      </div>
      <div className="tile" data-id="28">
        <span className="tile-number">28</span>
      </div>
      <div className="tile snake-middle" data-id="29">
        <span className="tile-number">29</span>
      </div>
      <div className="tile" data-id="30">
        <span className="tile-number">30</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile" data-id="20">
        <span className="tile-number">20</span>
      </div>
      <div className="tile ladder-start" data-id="19">
        <span className="tile-number">19</span>
      </div>
      <div className="tile" data-id="18">
        <span className="tile-number">18</span>
      </div>
      <div className="tile" data-id="17">
        <span className="tile-number">17</span>
      </div>
      <div className="tile" data-id="16">
        <span className="tile-number">16</span>
      </div>
      <div className="tile ladder-middle" data-id="15">
        <span className="tile-number">15</span>
      </div>
      <div className="tile" data-id="14">
        <span className="tile-number">14</span>
      </div>
      <div className="tile" data-id="13">
        <span className="tile-number">13</span>
      </div>
      <div className="tile snake-middle" data-id="12">
        <span className="tile-number">12</span>
      </div>
      <div className="tile" data-id="11">
        <span className="tile-number">11</span>
      </div>
    </div>
    <div className="tile-row">
      <div className="tile" data-id="1">
        <span className="tile-number">1</span>
        <span className="dice"></span>
        <span className="dice-system"></span>
      </div>
      <div className="tile" data-id="2">
        <span className="tile-number">2</span>
      </div>
      <div className="tile" data-id="3">
        <span className="tile-number">3</span>
      </div>
      <div className="tile" data-id="4">
        <span className="tile-number">4</span>
      </div>
      <div className="tile" data-id="5">
        <span className="tile-number">5</span>
      </div>
      <div className="tile ladder-start" data-id="6">
        <span className="tile-number">6</span>
      </div>
      <div className="tile" data-id="7">
        <span className="tile-number">7</span>
      </div>
      <div className="tile" data-id="8" >
        <span className="tile-number">8</span>
      </div>
      <div className="tile snake-tail" data-id="9">
        <span className="tile-number">9</span>
      </div>
      <div className="tile" data-id="10">
        <span className="tile-number">10</span>
      </div>
    </div>
    <DiceClick childHanlderEvent={onDiceRollEvent}/>
    <Dice randomNumber={randomNumber}/>
    </>
  )
}

export default LeaderBoard

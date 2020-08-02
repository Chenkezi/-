<template>
    <div class="wrepper">
        <ul class="content">
            <li>qqq1</li>
            <li>qqq2</li>
            <li>qqq3</li>
            <li>qqq4</li>
            <li>qqq5</li>
            <li>qqq6</li>
            <li>qqq7</li>
            <li>qqq8</li>
            <li>qqq9</li>
            <li>qqq10</li>
            <li>qqq11</li>
            <li>qqq12</li>
            <li>qqq13</li>
            <li>qqq14</li>
            <li>qqq15</li>
            <li>qqq16</li>
            <li>qqq17</li>
            <li>qqq18</li>
            <li>qqq19</li>
            <li>qqq20</li>
            <li>qqq21</li>
            <li>qqq22</li>
            <li>qqq23</li>
            <li>qqq24</li>
            <li>qqq25</li>
            <li>qqq26</li>
            <li>qqq27</li>
            <li>qqq28</li>
            <li>qqq29</li>
            <li>qqq30</li>
            <li>qqq31</li>
            <li>qqq32</li>
            <li>qqq33</li>
            <li>qqq34</li>
            <li>qqq35</li>
            <li>qqq36</li>
            <li>qqq37</li>
            <li>qqq38</li>
            <li>qqq39</li>
            <li>qqq40</li>
            <li>qqq41</li>
            <li>qqq42</li>
            <li>qqq43</li>
            <li>qqq44</li>
            <li>qqq45</li>
            <li>qqq46</li>
            <li>qqq47</li>
            <li>qqq48</li>
            <li>qqq49</li>
            <li>qqq50</li>
            <li>qqq51</li>
            <li>qqq52</li>
            <li>qqq53</li>
            <li>qqq54</li>
            <li>qqq55</li>
            <li>qqq56</li>
            <li>qqq57</li>
            <li>qqq58</li>
            <li>qqq59</li>
            <li>qqq60</li>
            <li>qqq61</li>
            <li>qqq62</li>
            <li>qqq63</li>
            <li>qqq64</li>
            <li>qqq65</li>
            <li>qqq66</li>
            <li>qqq67</li>
            <li>qqq68</li>
            <li>qqq69</li>
            <li>qqq70</li>
            <li>qqq71</li>
            <li>qqq72</li>
            <li>qqq73</li>
            <li>qqq74</li>
            <li>qqq75</li>
            <li>qqq76</li>
            <li>qqq77</li>
            <li>qqq78</li>
            <li>qqq79</li>
            <li>qqq80</li>
            <li>qqq81</li>
            <li>qqq82</li>
            <li>qqq83</li>
            <li>qqq84</li>
            <li>qqq85</li>
            <li>qqq86</li>
            <li>qqq87</li>
            <li>qqq88</li>
            <li>qqq89</li>
            <li>qqq90</li>
            <li>qqq91</li>
            <li>qqq92</li>
            <li>qqq93</li>
            <li>qqq94</li>
            <li>qqq95</li>
            <li>qqq96</li>
            <li>qqq97</li>
            <li>qqq98</li>
            <li>qqq99</li>
            <li>qqq100</li>
        </ul>
    </div>
</template>


<script>
import BScroll from 'better-scroll'
export default{
    name:"Category",
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll=new BScroll(document.querySelector('.wrepper'),{
            prodeType:3,//监听滚动位置
            pullUpLoad:true
        })
        this.scroll.on('scroll',(position)=>{
            console.log(position)//滚动位置
        })
        this.scroll.on('pullingUp',()=>{
            console.log("到底了")//滚动到底部触发
        })
    }
}
</script>

<style scoped>
    .wrepper{
        height: 200px;
        background-color: dodgerblue;

        overflow: hidden;
        /*overflow-y:scroll */
    }
</style>
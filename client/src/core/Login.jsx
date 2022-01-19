import Header from "../components/Header";
import React,{useState,useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {userContext} from '../App';
import axios from 'axios';
//import '../App.css';
import M from 'materialize-css';

//const axios = require('axios').default;
const Login = () => {

  //const {state,dispatch}=useContext(userContext)
    const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");
     //const history=useNavigate();

      const PostData=()=>{
        
         axios.post("/login",{
            //  method:"post",
            //  url:
            //  headers:{
            //      "Content-Type":"application/json"
            //  },
             
                 email:email,
                 password:password
         });
    //      }).then(res=>res.json()) //this form helps to parse into the data's json part
    //      .then(shre=>{
    //         if(shre.error){
    //             return( M.toast({html:shre.error,classes:"#f44336 red"}))
    //              }
    //          else{
    //              localStorage.setItem("jwt",shre.token)
    //              localStorage.setItem("user",JSON.stringify(shre.user))//if u can't understand this then just cnsole log shre once and as user is an object so we need to stringify it
    //              dispatch({type:"USER",payload:shre.user}) 
    //              return( M.toast({html:shre.message,classes:"#4caf50 green"})),
    //              history.push('/home')
    //          }
              
            
    //  }).catch(err=>{console.log(err)})
    }

  return (
   
    <div>
      <Header/>
    <br/>
    <div className="maincontainer">
        <div class="container-fluid">
            <div class="row no-gutter">
               
                <div class="col-md-6 d-none d-md-flex bg-image">
                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img width="500" height="500" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSW5lYn-vQo5d7LepLleJIiF-x8QEKd61pQ&usqp=CAU"  class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img width="500" height="500" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBUYGBcaGx0aHBsbGxogHRoeGx4bGxsaGiIiICwmGyApIBoYJTYlKS4yMzMzGiI5PjkyPSwyMzABCwsLEA4QHRISHjspICkyMjIyMjIyMjIyMjIyMjIyMjIyMjAyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIALwBDAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQMGBwIBAAj/xABEEAACAQIEAwUFBQUGBgIDAAABAhEAAwQSITEFQVEGEyJhcTKBkaGxI0JSwdEUYnLh8AczorLS8RUkQ4KSwmOzFlPi/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAiEQACAgIDAAIDAQAAAAAAAAAAAQIREiEDMUEiMhNRYXH/2gAMAwEAAhEDEQA/AKTi7JMeEKDz2B9ZA2IqJ8UttcitIOpymAW6E7n02onE47vcttdJmCJEZQM0gDxHTyjWh7eFe203IUzESup028Uzrt51zf6JhOH4llUAJr5ZYjpB93woy3xFTOpXlJIAJ8wR68/rSq/lGXTLOxUyORgzInfmag7sAnNqDqDrzOuvLWd+QpfjjIKGXE75YgZixj7oHqCTvz2javLFxu7bMoYENJBmNNdDqfiDpSxbDW5IIM7ZCSQepI059aacJW4y+Ix6sQwGsaTPoenpQ0oxAjwVxcoyN4oOrDQDofdsYo9JUgDQkAg6Qfw5hEHbcDzmoL+BQMGLHMecrCkACREfX411bx48KKCTpJggQNuvT01qH8toa0e4i5eBaCpCkECGkBSCV5wY670MuH8Qa6xAMltPvHrETv7zHPSpcfxGEBtsuo2mIA0IEc55aimvCrFx7RuoIcCVnMM2ntDbQ6iQOYImqjaVjybezjDAW4buxLAEK27aDNOnTzG+u0VDxW41x1tlQFGZQNAEKmWymNwBE6+0RprTVsal20DaGQuniPhzBiPEgJ1L8i2wgzJoB8HaW64uBWcoMoGcQXkzI5mJJOsGdabkkMUhFa4tu2wIy+NnUkDcFT1gxqOtLLyKjMsCRuZbce/bQUw4tYWzdNu3JkdQek89DBHrIoPE2iDDIZ18RiG5iZ0J9fKri/SARQsnWTyJnQzu3lHLyFN+HZ8hyoWBYmSYnz/rrUWGC5j4QC+vikiByEAnkdRTO1ihkCgD93KS06x0MDTypTl4UkmPOC8HsX1dHeLggCWCxoxJPJuWm/h3GsrsTwxkaLallAZhlJKnLAzidYkkU04JisNbt3HuAM8+GBto2p8QmJOwpfisevfXBbMI+omRAI2iTl03HTlG0Jl6Qot2GYZmIWNwAJjXQkn01r4qTMtHSQTn1nTQT7ulTB4LZ3zAzyIy++d55z/JdisQ5IAYMCY2JjcknrpGw3qlszZ5iEtqpMFcoDDLJXXkZ1E6aab86XLjWOixvzJkA9Naf2MqSCIOpMFtQdo6ATH6UsxvDs1wNbC5GJJkZQIEmeR56byCKqLXTDFBGGti4mZiwZSCoH3tWGrEwBBPntUWItlSRbLElwFXwk+hA+Z21G011+0eJBkEEDQEmAD7GoB00E/OorlqXLqMpJgaiQU00meY5HrQtPfRXh22OuW2UMEDKYKjKSIP3x7+sR6VbraqEfEsLGIsuMzW8qHuyPAGfTMrE/eXeDzy1WGwNoELcTOSRmfOywCCCCJ5Eg5o+7EcqgwnEUtsIRlkAMuYHRSCsEgxzOs+1Rp7QddjLD8PW4WuXLgtAsvgAmF3geX3RMxznU1deBWAkqhGQDTQyfPeqMcdbZiwtZSdCSTCzzXXYCNY56bU0w/aPutEGwgDcEep1rCcZSaLSXhd1sgPmNsA/iEfPY/I0nx+HRJdcQLfikhyI3kqBy0mNKreO7XYhxCBbY6gS3xMx7hSC+1x/tHzvrGdsx90n6VUeOXoUWvinaa2qlbBct+MDKPMCRJ+FI07S4sAql50ViWIQ5ZJ0Jka/OicL2WfMne3EQPMAavMZogxymYJ285oXj/D7dju0SSSss07mBqByGu1bKCih5JsDtDOSWYkwTJOp99cC0TrXlp8s+YI+NfW7um9IdBmEwIEXC+WTACiXJJIAExv0nai8dw7Lbm2WVhop0MnUQdJnzHlvSC3xF0cNuQSJKzA9ecaafrTzCYxnR+8zNqPYcKdfInKOWkc/jE1JOzFM+wmVY7wZysEi4WyCdJ0A120M8+lccSS2ClxAhzkrGU77Egc/f1FK9C0MxyknXkOYiTvB3pvhsDPiL5tTpcBUHYAg7DaeY8qTWLtsfZ1gcUqEtBJGgGxHwMRpz+VeYniOfLoCTM7AdQZBM7jlQ8wRme0sfd30B5nKQTpFCsSSDmVtYJECI11IA6+gjlQoJuxMb4Fi6qSRGokK2usDU6Eabz9dInwagiWNsSIEjRhOszJBjb40Phb5zBM2QAasfZ2gAbdAZHSjTca2mb22aUGrDxAyGk6HKMx93OltPQqIMLgBnZ4zJEDQEAHmekSPdTfAIzZ7dg+DKqu7EwN8yoN26TIjXnstwoK2+5DuQ5DFQVJg7iTsDESNvhRds3VVnQm0ugCg/hEco2I+dDtlJBeAvW7TFGg5CxWIA11dY2ABLRyiY2pPieMgXbly2qlXKkFh7LhSARrzWfga7fDgIcxJY8wYy+ems+6lV8+HJnBVdoABzwAra+TAyPMaTpUYK7YNgV26XbUeKYnXnvI6zy6ijGLrrOqkgADxHL5CJ1gH1513wm3bRibgJncxqFPKSefUCR1rlsSiue7tkifCAOpO5G5125ab1rRNHxtkLMFXI2kHLPnpBn0iIqXh6nLlBQnXlBjc6nf5fDWuuIFmEm3lUQwBJBkxr7JB5z/ABc6BW/ElFAJHs5yek7gT18ppdoBouOcMQrACIA01kmemUGY/Wg3xYt7AMSAZIPh5FTtz+nnQ1m47HKp1fYQSNtYgxPnB25VB365ojwxEDca8xsPP1oUR2Hpis6jIQrxr+8Z9wnXep8NbZgcy5SDBEjnrA11Ov8AWtAZx11M7xqTrqIGs1Lg7wLlrjlUXWF3JEAAHWCSd/I0NfoGMcWYjuyFyqoI3lgNXJOozdBoNeWg9s4hXQsSJ311nTWdgNjXNx84TvFyqCwVgpBg5TDZRLAZfdTYcZW0t23ZUZbg8YKqykwVLAZQF3blzqClGxJYfN7WURJ21AHqOhipxZQMGzZbcTkk6mIgGCR16aVDexMqqhFXKc0gEEmI1jTaOXKusNgLtw5baMxgHoI5HXSnVlY/s6e/bUjmsbDXqdST+fP3UtvojPmCx5T+fOm/DuCh0uPcuLaS2xViRMEATzA501SxhLLsBbuO9lDcbMDlYAAQCfCT41Ogq48dA2lorOGwty4cqIzegPL/AH+dObPZm6Cpulbakw2oJVQpYt+GIHWm9rH57Fy7ZAt2/tCqxBkMIYDZQRmMfvUbxEzNtdRdF1Y/eFvLA/8AFqtQIchPf4Jatpfg5yiI6sTquadDBg7b9DU+DxarZNll+zFi00jctcYhiZ00bKfjXeGsu4u2hAc4ewpzToSrgz5ik+OxVsYLMH+1a3bsZdJBttJMb7D6daqkguyTiy3EuDEd8zBMSQLekIJgzz1Ue6ah7Yj7cfwA/X9Kg45xi3dthLaFWdhcuEj7wUKAOvr5DzoXivEmxDh3VVIGXwzsJOs89aickVCLAo0rwKakVJA8zFdFuUbafCs2zVKwTvMjSCAeR6HrR9zjLRAWJBB8Z8WmhPKTzkdKWtaJJB8Ma7STPWvcThyBIMjkTGunrVuKb2cp4iMQFg5mIA5DUACn/B8M4RnuBcmYqZOsDMAVgaAnLpOoBPKkGHBOi9QfaA15fnvT1sIQisGCkSoysTEjxc9J+lTNroaFePw653OfTUhdBGnsqeg2+HWvcMmYaZWfpEkxAClv4efOK9xHDwokkHrqNOvv0n3ihcJnHs6+KD+HlEnz1p+AHYdTnHhjYkiYEa6ESRTS0GIZ1GbJbaSdVGmp8mgNpHnQlviORXBHtCIyzpuRPuA57VYxcRluqpBRhLsDCnMgza8tOlZSeOyo0KeGYEFLZVSzEHxchJ2LR4tOVMcZaYIRJAnctz/e2J2/xV3hcSEUZWmNFHIdTPsnbr8K8v8AGzlOdQUA1ZNQSI8ObZfXbSpcreh6K1xDMsht51Ysw12jeSAI5c6WviNoJc9DsOkdfj7qevxdHNy4tvMxhViSQANx56mdPoKrrXCWbSSJJ02A3PlW8P6jNkj3HJIclZEhYPuAA2o/h2JyObawcyZddgWjUUpBO5198Hnt/XOp8CzZswUnpz211605LQIOx2JfKLZYHLLGSAVnNmVRzAMmQOlCOq5AqtmZpMZTO/lM7HfrRTcPa4zFhlnXkBPKB5efWpsPwzI4uZyrDXwSAYM9Zg9KSpIvBsH4bw4XrbZriIVJIkwz+HZRoNCJ3neAaXnA3VYjI06HUQYI5z1B286uOF7xnAsghn0hPDMSTJ585JM0WnZ+5lz3WS0gkszn2Y3zdPjQpMrBLtlRsYF9CxAYa8jHu2NNCC1sW2OYAgjwqCSJC+yATAYj31YuCcHs3MxZmuQzBcpARlQ2/Fpr98c9qYNiBaa0tm1a7txcy3NcwKoz5SNz4lPPb0p4thpaKvhuDX7ns22A01bwj3Tv7qYp2ft2wzYi+q5VLlU3yqSC2okjbYc67v427ctkvcOtrC3CAYGZ28e3IxtUvFbcXHUjxfs+JMeTXSyn3g08UGTAeK4W0ptW7dm4oLp9q3s3AwBIXXzHIbGnWJxguI/e3DYUC4M6aMgS9kEHXcBR6k0h7Q3iBaYXw+lthalfs8qLqYM6md654rx625uLbtnu3tlddId37xm84NNNKwabSALShrWMElxkBBP3oceI+Z3qyYlXN8Lea2tm5Ze3bOzAlbbNmnT7pj0qnJfdVZVMBxlbQGRIMfKobrs+tx3fkMzEx6SdKlTpDlC2PcRxLDqHFuAP+YRFUEwHyZCOgJX5UPjO0Tuym2hXLcNxCxEiRBUqNIPi5/epUqVImGY7KaHNgoI6v46873LneMrXIzZCVkLoo0MwBQvdga0euBPMilWMvMpKg/Kl2PSJuc1w2JQTrJ8qAtnM6gyZYD4kCrAnCEHKjEX5BUccQfDpvvHPeuP2rypticJG4BHnQX7Ev4frSUojuR3dunUEEabnNy1gSdBImhyZAIMgCJG1MThXy51fwkkEidIGuk7bbx5VHe4kwXITJGx0Bj1U/Wnf6MKIMCkuvh8J0JMwZ2k8vjXUMAoiCBBkKBOskCNdI1OvpFfWbrMADcOjFgInWBqfd9KiuoWA9oljoYOpnXNp+tMPAu4gdGLZVbSI25b5Z5D13qLBwLdyHOhUwBvuOp69KgS5kYAypB1Ohkc9Dpr5g10mGuZPCJJMwBqd5JJ5abefOgaVkmIxLCICjz3mNNzufSvrWK8RUkglTtJJ6RrUlrg9wsGKqg3ImdecADQeU0YeCKdXYk6+zpznmTSbiWuOT8IOGZ2fK7ZVCk6RDE8jrqSJ+AqTEucj2wrjMZEBo1J0II05/EbUzw/CQiZkttln2iGInpO00UcJc8M23AYhVlSASdgJ0rNvdlLi/bKtg8DdDA5Y/i28tOdE2eEMGLNc1O+Ubjp/Qq5Yfs/cDr3htoND4mnNBOZRlmSADIobtDhVt3SUgK6i4oAjKGnSPKKpuXZShG6FmA7MrcIJiW2Lk6+cAbTziu3whtt3eUKQ2UgRoZjlTtFi4CGUBQhjxSbaqDm6Ae18aW47FC5fD7Bri79JAk/Cs4zy98Q0mm9Da12bQP47mYA24yiJzuVYazyHzo18FbtlVt2AylkLuWBa3BBgSCWmDoNNTUWO47h1Lg3FZswOZJIJQ2+k9Tr+4aU4rtVOY27ZzSSHMCAUhdNdQ5nUbDz030jP5Mf3Xm4qpowa6QB5XLak+hGb4muGzuVNsI7G3c8NySrOe5KFj0ynpVUxXaS+8FctuC58IJbxzMk6Rr06Upe7cKhTccqBEZjEAARA8gB7qMkPBss/CeK27QLXGRG7y5KjlL2Acq7wAGjyWl93jloG13dtsqG47jYF3tm3K/5j6nnSO4VESQK9s+LRdaWboeCuwq/xF2Tu8qgG3btncki3MEdCSagxOIuXGL3HLMQFJOmg5acqJTBzuaLtYBfwz6/pUuRSSQkCbwNfKpkwjn7p99Nbt/u9rF4jqttiB765TjuGmGJU9CGX6gj50bDJAS8ObmY9Nant8OQdTU129buD7LEKp6FVb/2/KhhhcWvs3bTj98ZT8h+dFCyChhlGy/KuTQzXsUnt2FbzRx9CSanw2KZiJsup8yn6z8qKFaJO6PPSqfxBvtH8iRWgNgLrjw2mPmRl/wA1UziuFKXriusMGMjod+WhohJWKYqwjfaJ/Gv+YVewPL51QVIDgnYNPwNX4N1itjI6xeHmgf2enr25HuoX9nrlNbK+2MBtG0mqhiwmQZMTtoYiJPnvpQaYEkCSA2uoHU7+dT8Jt53YAQC4GnmT8avd7h1v7MMjMqjKsmIi5BmAM2adPjzmtsXboSSpNlNwuBZdFDbZtQPZGmbbUVNYwmbO1sRkGc+JtBIGg9Wq5YOzbNsOURDlUGdQgi2xQEnkZOU76zUOI4jbVbuW6mWHUWxlzF5ZS0KOcr5b9KHD1saa8Qgs8IvMO8Ft8sTmIiRyIn2p8qc8M7OFs/ePkcRlUQ0yBBMGSDMCOYPoecNxizaRQJuMuUjwtIByZ0LMdW8J1ECMo6mil42iWs9tQsEIillzMqMmVbijWYDEMDlXMdzFCjH9lW/Ed4rhqI62nRyLdtnd7YQM/iHihjsAY6mNBTjEcOtu7PkUuWXV8xGghoVYGw0k6n3VUBxq6j57aopyd2qkFgiAiBJMsdNz1NQYjiuKac15wC2Y5fCJ01EagDKNJ5UlKKG1Jl3b7MZbbJbR86ofwvLsNzBAgn4jpQt3G2+7DG4LptMj3CHnxKe7YgaxszZRvHnVAcLHiYdAC0wPTlUY4kFRraucjQWCgeIjbU6xTz/gsP6Wpe0lpTBR7uQk22gLmzhu8Yg+yCzGB0pVxXHm6S5XLoFVZnKomAT1pFc4ok6D4muH4mW0lR6R+ZqW2xpRRZF7ROgt27VuQoElzvHJY5T15UDxC9JLMVXMxJ5ATJ+FKRcMTJoHGnbz8qiPGo9DyGTYq2PvT6Ch34io2HxpXlNeZK1xROTDn4kx2gUK+JY/ePxrju6hddaaSE5Mkznyp7wx7mSVsq4/jCn5j86roFN+G4l0yhczGScgnXlLQJ3j+tySJUhkcGjN4sK4bqrDT3h6OwnB8zBUv3VY/cFxW2301+tWjhuFu4jC3U7rK72yEHsksV8MDZd5k/rHfZLsjibWKBvIyoBc8W41bw8yNQflWeToeir4QFbot/tjsSYy9yJ/8sw+lN+I4juQve96wadwj7eRmJkD3ih8Pwe6MaoZCJuNBKxIDPB+AmtH4n2VW9bNu4qsp6Egg8iNoNTK7HejN04aty1cudxatsjKM9yygtkHMSZAGb2d4iZ3irPwlMIiBRbtXI/CwUfBIHypp2p4EF4c+R7gFuxAQGVAVXOaDqSM288qyhMJ4wQfvrvP/wCz+dJpv0SLT2j4QAty7aJC6sUcyFABPhIAJ2Gh6mqiMaAy5CZJEmTAj+hyrQ+0fDowd8gfcMeoE6VlKYW5+Ej10+sUoRbXyBl3w3aEgAd9P8UH661VOP3Dcv3HMHMRtt7IH5UOlh/wt8Ca7Cf1rVQhi7HJpoRYhYZvU1f1XwrqTpvVFxq+Nv65VdME/wBmhkSVXr0G/KugxNg4Zg7VzD2We2jE201KqT7I518/ZvCkz3Q+LfrXvZhpwln+AD4Ej8qa1xbTZsj86cL8ILTBzkg7RG1G3+Is5Je6WMgmWO4EA6dBpSlrubQwI15wYMQSPT5064LhQ1h2IEtcO0QIAED4GulxEp0qoXvi7c7gn0P6V43EbfIE/D9a8xOEhmA6/kKCewRy+VGKHmwxeLgT4AfU/wAqibizSSMony/WhCg6Vw6CP96eCD8jCn4lcP3z7jH0oc4stzk+s13hsPMmOVTiyTvRSQs2C98xECfgPyNRMCN9OfP9aOx9gJbBEzmAHzoJIZdZzbe4c/WmkS5HaAnQE7gb6a9Z2r11yqDIaZ+Xu1qG02VSerADzgGf81SNcEqNYjUT8QOm1FCcmF2LA7vO6qpzCNtRBkes19dw2xkwdRPQ7elR3Lzd2CNu8YabQEXTTbflUmA1U+sfLlSlrZUHboKwXBrlwZlAiYkk/LTWp8ZwB7VtrhZTljw7SOZ9dtKccCY924k+EkrHmp0+JrntBIsKu0sub1APh92nwFNVVicnliVhU8qXXl8R9TToIKV3VEn1P1qYs1lEHVasHZ7iQw7NcOhIUbkaeIxp5x74pKiCrb2ewuG7q5cvISwMZt4HhgAepMzyom9bIa0X3slxG3cAuJn8xMrMwWjzMg+YrQ0YESNjWU8L4rbRQLdwqvIG2IifITyFW/A8eXKAuIsNA+8txDp1JrFSSEWmvqUWuLsdhaf+C8v0IFEjiLc7Nz/tyt9GqskwonuYdbls23EoyFWGokEQRp5UnxHZDCsNFK6g+HL90hhMqZ2p7auBlDAEAiYIg+/pXVPwRSu219oezllDbBZtZVfECTyA8zWcJhMNKySwBGxY85+7760Ptv8A3ymd7Y+TP/Kqqx1FcsuSSk0VVohu8JwJ0F029Z1cDryuCaR8bwi2rmVHzqVBBkHedNPSr9+0I33lPvH61Ue1ltRcXKFE2xtG+Zq14ptypikqRQuJJFw+76Va+GGbNv8AgXYeXWqzxVfH7hVn4Qw/Z7ckjQjfoSOU9K7PDM17sa84K1qTGYa+TtpTyq32DecIB0dxz8m5/wAVWSuKX2ZvHo/Ml+2VddZzDNE7Ak9dNo+NW7g9rLhlB0Mkx6k/OIpZ/wAI+x7xYGZi0nki6DzBJDH4U9tWz3SsNVga6azrXUzEVXrclj5mg7lqmmXShri+VBQqazQ+ItaU0dKGvLpTES4Gz4WqVMPUnC2D22I5NHwj9aKRKTGJu0C5bduPxE/AUDetogBSSQIeZjfQ6jT50z7Rpm7tR0flP4f51LxvE2mtW0tmSyh3n7sQoQ+czJ38IppksrqMTqANI0I85/WhW50QxyhwPxZR7v8AaucMssA2uux2PrVITJ3JFm3rHjuR6ZbX5k/Gj+Gaod/aP0FNuL4G0cOLildJZAGjRwonLvMgaTypXwo/Z6c2NTN/E04l8i08Gww7kkNDFpjkQNCvwn417x8ILMOSXLAiTueUD0mTS/B4XEQLlrMBmCyGAEyAJE9SNxXGJ4PeVWvXIOpBJcE7xp7+QqVL49DfH87sAilV1dT6mmhPnS19zrURZvJHKr5Vfux+GD4RxG1wmPLLb/OKoa1o3YFf+XbzuN9E/Sie0Q9I+4lhClt2AHhR2EfuiYpBwrHXTdW3m0IYxA/Cp6edXniuHL23RRLNbuKB5lYFV7s72ZvnFW3dGFsB8xkaeC2BpPMhvganBU0Z2AN2gupc7oAQHyar++Vnfyq3KXHKq9j+y+KGKZltXShuyGysQV7066DbKZ9K08cC/fHw/nUy40+h2hUi3Ewj4gXHBCnwgnSGExr0HzqrWv7QlWA1y7PmgO8RzPUVod3Af8pctDUlX+p/SsE4jgyp9mNVP/1n6U48aZLZpOP4n+0oBcJYAZgcoBAI8qyFeI3B7NxonqduVbZY4VltKzCPs1jz2Hu3rDzw9hvct9N35f8AZRxQ7spuug5OMXR/1CfUD9KJtY1rgltxpStMG/iErppoW0OvUDp8qPwVgoGB6jp51soJMTlcRbxb2gfKnnATOHUGNC2ka+0T+dJ+MiCvoabdnGmyQJ0Y6bDkfzrUyNX/ALOj/wAtcH/yk7Rulv8ASrbVM/s3b7O8P31PxBH/AK1c64uT7M2j0YfduXLdrI6kmJnXbYQPduedPsM4tWLa5Z2k6fdAH5V5w1LV/vB4hCATJ8530HKuMS4KBZ11n3zXTPukZxetioaCoLmtEXkIJU8qHJpgCvQV3f3H6UddG9LsRdVfaMaHkTy8qAGHAUi0fN2/IflTFVpPw/iNu3aVWYgy26t1OxiDRKcZsz/eD5/pSobYB2kVi6Bdwh+Z/lSS3iZgMOY1/I064rikuOGUhlCxIneT+VV14BMaa86aIsnxaFdOedv6+dD5qM4nsjDn+g/nQdssdBrOn+1UugfYzxNwd1YBH3Lh087jj8qM4ZHdiOp+tKsU4ZbSgHwIVJjcm47yP/NRTPhjfZqPX6mo5OjTi7LDg+M93bFsWg0PnktzBBECNNhrND43iZuIUyATcNwmSdSIj4UGT6V4axydUdOCuzilzHWu2xb5iFUGDEz6x9DQ2GxLBwxt5h0J0Mgb6fvqffWkYMzlOJMpFaH2GcLhzJ/6jfRao/8AxBNzhU5/fPIMfwfuGrX2Wx3eWmyJ3YRyMszrlUk7DXxR7qUk6Ic09F0zAspE6Azp1j9KZ8LvqrNJiVIEzrQvB7avbUsoJkgmPP8AQ0fcwVs/djXWCQfltUOQkiwW9QCNorqKSYHEr3alLd1lKggqTp5GWBPrzon9rA3t3x/5H/2p2hUxgg095+poXEcJsXAQ9m0wOhlF/SpLBDrmBceR306g1IUP42/w/wCmgRVe1lxw9u3bcWwVMyQq6EHes1vWLYJHczqfuJv1Emr72/vqhtsxMAEFgpO5ETlHlWecX4rb7l8lwhwPD4HGsjqsDnvWDUsqRXhYlw2GIk4RhmgmLW56+CeppP2hs2VCtatuhJObMlxZ6e1p12qt4DtPfgC5iri6x4VQwAyDmv4Tc96jrRV3ixuqFbEPdOjZWRVCmIJBAE6yK3jxSjK2yW9CbjP3ff8AlTDsyfs3/jO/8K0DxfVVPmfn/tRnZdhkuDScwMx1H8q6CDUv7NX1vjytn/7BV7rPf7N3Pe3VJ+4Dt0aP/atBrj5vsbQ6Mn7Lplt3WG2U/GAaHxCkDzo7g0nD3CNoUbc9RGtTcV4cBbZgNYXlyEAxrW/rIEeMeWLddaGY1M+3yoZ2qhEFyk/ET4teSN84X36E6U3utFJsc0s2sDIonpLr+QNNARYnFeEAjcE7t97N1H7/AMqGuYqZ0Gs/PP8A6/lUl3DghfEo0E6noo6eZ+BqHulEeIbjn6eUCJ6/dNVSFbCktc20DFjuIHiKx8VNQ41BvABE6dR68yKLwrA2zOvhIHmSxaT8aj7qQoaDBDGOh0+VLpiPnwpfulVHjmSp08zHKjcRwwrAt23LKJZgHIzZhATyAqxLbAVI6AfKjUUBSdOfX9aENmcd4yhTGhkgyddVJiD1WP8AamWAaUX0+lLrqFktZRPgMwOZuOBPxUUywAORdOVTydGvF9g1PfXx99fA18zVgdIjusQzHSM/MT+KPz+VQ27+uoXboOQX/SPia7ukksBHt7RJ0zdNYiaHS0xPsnY8v66j4iupHC+wlrgIiAPCT66P8N/pV37ECLVzSPtT8ciTVHW3AOafZI1VvwvAHTb69KvXYc/Z3Nv707bewm1TPoa7NI4Brbbyb6gV92hx7WLPeKJOdViY9oxXPZw6XB/CfrXPa+3OHUf/ACW/81c67NPCrP8A2jXLR7sWNmyyHjYwNMtWyz2zJAmx/j//AJrNuMYKcQQB/wBUj/FtV/xXZy+9sd2pBgR4l1kc9fP5cq134Toa/wDE+9wl64iFXQN4e8aTABmREfyqqcJ/tD7tMjYZ7hgvIcCFG/tDyn31K/BcZaW4ly6lu1cGR9ju0nfmQQNN5Ooqt4FLS3Gtk693cgkRsjTqfTn5Um6aEXS/2uw1y33lzBhwoYgNkYiJmJXSazftL2it3u+7uz3auphZHh8PQCN/rVy4NhFuYQeJVLLcADEAnRo0mYMaGqhjOx2JCuYTRT97oNeVVSfYf4VHhuHVwSXtqRngOYmAhAnz1jTkaOGVHKZYIBGZWDKcruDBG40EHTbaheE4fvEdcpJBJEAmItXXB0I1+z+AOh2orGWLqYkm6ndsxZsojLqxPgAJCjXaTqTWrRBFxX2Brz/Kpuy7f3gH7p/zCoeJDwe8VL2X9q5P4V+poA0v+ztoxLjkbbfJkrSazDsEYxg3g23G/kD+VadXHy9m0OjOOG2suCEiCzDn1g8/Wmd3KRECPdQVsk2bSxpmU9REASYojEqxU5NG5HX051rfYqEPaDCoiqyjdjO3PaPhVaxF2BIq4cTwN27bCLGaQTJMab8j1qtY/s/iEWXKGdNC3+ihSE0JMTipA1iaVXLgIYtMeEab6Zj+VN73BbsDVNOpP+mld/DlSymDDAGCdwpj3eL5VcSGiW/hV01aI8vP9DQl20qkTmOuvynz6/Kir2PExk+fXN/q+VDXsTmOiwRJGvrPPp9KtAQWbuUaHUiNCZ6yI/rWpcG5DSCd9efx606wGEttbQ5BmWGJA122Prrp76N/4dbJzZNRB0Om/Mee1Zvlj0NREnEcZcDiHZdBoGbT51Hh+JXQSDccggjxOxA9xkf1vTl+FW8xcgvqITxA78/I/GoL3A0Cs/s6FlUlvDA9liec+XKmuSINMUYfD3HUBSSANgR4fE2nxHPrTDBmEXfYVHwxnGUiSI10H42089iZ86ktjQacqXIzXh7Cw3nXhPnUYr4++sTcTF2kxtnPxg/kTUHevO7fPqP0X4Cp1J1I/Gdefs6j0g1Jg2Z3gsdRv0JZNfjHwrqOIHFx4Mlog9eh/U/Gr92DB7m5O/fNPrlSaqOItZU1Ynwke/I0Vbuwx+yubf3rbbewm1TP6jj2aH2ab7Rh1X6EfrRHa293eGz5FfK6GGGm9AcAeLo8wR8p/KnXGbbPaK22ysSACSBz6nSsErZfhLwPA2rlvvDbVg5DAsok8w2o9809FwSFHT4AVn93C4xLlpkKqixnU3mPeA+1I1jcx7qnxXaNcQuS3chEdkujKJbQgoQw0BkGRptE10dGfYo7cY5LmKXJethQseJwAx+9lnQxA1BO1JH4TexAzW3sXBbaXK3rZyoM2rEE5T6/hOop5xLh2HvlDce6ck5YZBEiNIXpUXBeGYS21xcFcLYgIym019TKkjMrAo2nu0NZuEZO2Ul4J8Rbv5y9x7P3T4LgaAq5YVVUg6AHTXTSrFY4/hrtsjOSchDEAkDSDsNPhzpnieEWraKcQoB21xIGVRERmAPXbaKzDipS3fuNhA6Wrg8MhnDHZspYaqW56+6KuMYoTT8Kjw3FtbaQzAEicpI3V0nQjkzD0Y0wuYtbl1TGsGTuWJA9piSWiOZ0pNkMlecx84orBWWDBoMeh5ifzqyRhjx9mfdUfZ1vtGHVJ18iP1rvGf3bVB2f/vtfwt+VAGk9iLkYy0NNc49oT7D8q1Wsg7KNlxtiAILxMg7gj862CuTm7NYdFI/Y1tWTc1AFuYBPQfDlQeCxVy4ygWXCnd22HOTIE9NKNscUBRRrsN/QVMMXO2ta0FnX7KfL+vdUGO4c7oVASeXiP+mpv2o+de/tHkaVBZWMRwDExpbVvRx+YFVfH9mMVmJ7p9SW0E6mByPlWorf/rWuw3mKadCasxO5wLEA/wB1Hqyj5TXy9n75Oqqv/eOe+1bYyTvHwod+G2jvbT/xA+lVmxYmYWEvpobQYeTLrVz7MYDCXbU31CXMxENcKyN5AnTcjltTF+B2jsrD0Y/nNDv2fQ7M4+B/Ks5wUkUm0PrHZ/BR4EB9LjmfnUPHeB4ZcLiHFoStm4QTJghGIPtddarz9mm+7cHvX+dDYngWKylVfMrAghXYSDoRrArP8Kvsef8ACs8EwFsq+ZToib9TJnQ+dLb65bjgbB2A9ATFPG7OYlJhbgBicr6aaD2elA3OFupObfnMzPnIrWS2OEkgMGvCaIfAuB/Oh3tsORqcWaZoSq0DbSW5DfKB8gZr5McQZCgegA5hvyFSXLREg6ak7dQB18qECL1Pw/nXRo5dhDY5iIO0Ef4SKu/Yg/ZXJMnvWk9TlSqKltSYk66fGrd2exK2lKu2rOWnWNQNzG+lTP6jj2aBwe5F236x8dPzq0cRvW0t5riqySJDKGEzppzMxWf8P4mmdDmGjLz86uXF7dvEWWtuZUlTCuVOhBGqkEa1z3TNEIuJdosNbGa691AZibbgHSQAWOvPQTVO4jdxZu3L2CtE2ryoQwVdSojMqyI6baxVy/8AxnDlcrIzrM5XuXHEjYwzkUxt4VVAVVAUAAAbADQAeVa5ixMrv8U4mCARdAI1JsCF+CtPr8qU2Vu2bi3UZ0uhic+VwQWkMYKzEE8q2zuh0rxrQOhimp/wMTLL969cD4i9d7wLAfMDmY5Vl1JAOk6CNYiKlNkhM7LdVAJzPbYKo9SsDer7ieAYV5L2bZJ38I5enqaEudkcG0/ZsARBAuXACPQNFJtMKoxxWi6cpUy+hO3tgg+mnwmmjYkAKsAMGCMPOHUkeUgUHxewLOKvIgIVbjKup0AaV157CoEvEnc+2GYTuZ3I5nxHWtjIZ4oeBvSg+AN/zC67hh8ifyo5xmUjqIqLheBe3eRgw0J9kkHUEdPOgC68EeMTYOv95b6fiA67a/OtkrEMLdIv2iS+lxDqejCtvrk5zSJmtl1yrrGg3Hl5VMjCYBB98fWKDt+yPQfSvYrULGSPHX8qItPPMH3ik6kjQEx6mvUvFhrHuAH0oHZYVWeVfFBS+7byIGVmB9a8t4t9NZ9aBDEJ5muoNRW7pMTUgc0FHsN/UVx4vL5/lUgNfb70AQsY3b6D61z3sfe+RP0owIKjagkh7wn7pr17QbRgD5ETUleCgoAvcGsvvbA/hkfSl97stbPsuw9QD+lP6+oJKXf7HdIf3x+X50I3ZxU3sn4Ej8xV/ivTTsKM8TCovsoo9AKmBNXi7ZUjxKreoBoW5wWy/Ir/AAn9ZpioqInrRCYu4Nrjj/uNd4iyFJiaiqqQglOJXh/1G98H60QvGro3Kn1H6UuNcGlSC2OU4+/NFPoSP1qVeOp962R6EH9Kr7GuHNKkFstScbs8w49QPyNTpxjDn/qR6q36VSzUbUUh5Mqva1l/bcQVMqXJBHOVB+tKfveWcfU1asZw62zZyup31bp61A+Ctrsi+8T9auyaBlojD+0vqKDYRsTUmFcllnqPrU2FD1mggxpIMg9NetbvM61gbqADAGx/Ot4sGVU/uj6CsefwqB//2Q==" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img width="500" height="500" src="data:image/jpeg;base64,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" class="d-block w-100" alt="..."></img>
    </div>
  </div>
</div>
</div>
<div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">
                     <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <h1  style={{fontFamily: "Georgia, serif", fontSize:"50px"}} >Student Login</h1>
                                    <br/>
                                    <form>
                                        <div class="mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"value={email} onChange={(e)=>setEmail(e.target.value)} />
                                        </div>
                                        <div class="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                        </div>
                                        <div class="form-check">
                                            <input id="customCheck1" type="checkbox" class="form-check-input" />
                                            <label for="customCheck1" class="form-check-label">Remember password</label>
                                        </div>
                                        <br/>
                                        <div class="d-grid gap-2 mt-2">
                                        <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 border-0 rounded-pill shadow-sm" style={{background:"black"}}  onClick={()=>PostData()}>Login</button>
                                        </div>
                                        {/* <Link to="/reset" className="p"><h6>Forgot your password?</h6></Link> */}
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
    
  );
};

export default Login;

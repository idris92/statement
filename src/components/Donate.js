import React from 'react'
import {Flex, Text, Spacer, Select, SimpleGrid, Button, Input} from '@chakra-ui/react'
import validator from 'validator'
import { usePaystackPayment } from "react-paystack";

const Donate = () => {
    const [amount, setAmount] = React.useState(0);
    const [email,setEmail]= React.useState('')
    const [error, setError] = React.useState('')
    const [currency, setCurrency]= React.useState('')
    const [mailError, setMailError] = React.useState('')
    
     let references = (new Date()).getTime().toString()
    
    // const [config, setConfig] = React.useState({
    //             reference:references,
    //             email:'',
    //             amount:'',
    //             publicKey: "pk_test_0cf400c602268d06bbba26454b61c1a4f858f698",
	//  });
    //  console.log('refernces', config)
     const initializePayment= usePaystackPayment ({
        reference:references,
        email:email,
        amount:amount * 100,
        publicKey: "pk_test_0cf400c602268d06bbba26454b61c1a4f858f698",

     });
      const onSuccess =(reference)=>{
       console.log('reference', reference)
        
        let payload = {
            "transaction_status" :"success",
           "email":email,
           'amount':amount,
           'currency':"naira",
           "transaction_ref":reference.reference
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // // myHeaders.append("Authorization","Bearer" + JSON.parse(localStorage.getItem('jwt')));

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:JSON.stringify(payload),
        redirect: 'follow'
        };

        fetch("https://donation-temp-backend.herokuap.com/api/pay", requestOptions)
        .then(response => response.json())
        .then(response =>{
            console.log('paystack result', response);
                // if(response.response){
                //     // toast.success('payment successfull');
                //     // setCartTotal(0);
                //     // setTotal(0);
                //     // setCart(0);
                //     // localStorage.removeItem('productsInCart');
                //     // localStorage.removeItem('Total');
                //     // navigate('/complete')
                //     console.log(response)
                    
                // }
                
            }
         )
        .catch(error =>{
            alert("Something went wrong! Please check your internet connection....");
             console.log('error', error)
        
        });

     
        
    }

    const onClose=()=>{
        alert('Opps, Payment not completed');
    }


    const handleDonate=()=>{
        if(amount < 2000 ){
            if(email == ''){
                setMailError('Email cannot be empty')
            }
            setError('The minimum amount is #2000')
        }else{
            setError('')
            initializePayment(onSuccess, onClose);
        }
    }
    console.log('type', typeof(amount))
    return (
        <Flex gap={{base:3, md:12}} direction={{base:'column', md:'row'}} >
                    <Flex w={{base:'100%', md:'50%' }} py={{base:'20px', md:'80px'}} direction='column' gap={4}>
                        <Text fontSize={{base:'40px', md:'70px'}} fontWeight='700'>Support our Mission</Text>
                        <Text fontSize={{base:'14px', md:'18px'}} fontWeight='400' color='darkgreen'>Elections are expensive. They still cost billions of Naira. Osinbajo has never been a “money bag.” We need your help.</Text>
                        <Text fontSize={{base:'14px', md:'18px'}} fontWeight='400' color='darkgreen'>We work every day investing in public and grassroot campaign infrastructure, taking YOUR message to delegates. None of this work is possible without your support.</Text>
                        <Text fontSize={{base:'14px', md:'18px'}} fontWeight='400' color='darkgreen'>This campaign is led by everyday Nigerians telling themselves the truth: that Osinbajo is competent, experienced, and prepared to fix Nigeria. The best choice, if not the ONLY choice.</Text>
                        <Text fontSize={{base:'14px', md:'18px'}} fontWeight='400' color='darkgreen'>Please support us financially. Also let us know your email address – so we can thank you personally, and inform you of our activities from funds raised. Thank you for your support!</Text>
                        <Text fontSize={{base:'14px', md:'18px'}} fontWeight='400'  color='darkgreen'>Join us to help take the Mission further!</Text>
                    </Flex>
                    <Flex direction='column' bg='white' rounded={{base: '12px', md:'24px'}} p={{base:3, md:12}} w={{base:'100%', md:'50%'}}  >
                        <Flex w='100%'>
                            <Flex display='column' gap={4} w={{base:'60%', md:'80%'}}>
                                <Text fontSize={{base:'18px', md:'24px'}} fontWeight='600' color='darkgreen' w={{base:'100%', md:'100%'}}>Choose an amount:</Text>
                                <Text fontSize={{base:'14px', md:'18px'}} fontWeight='400' color='disable' w={{base:'100%', md:'100%'}} >How much do you want to donate to this campaign?</Text>
                            </Flex>
                            <Spacer/>
                            <Select placeholder='Naira' w={{base:'40%', md:'20%'}} onClick={(e)=>setCurrency(e.target.value)}>
                                <option value='Dollar'>US Dollar</option>
                                <option value='Naira'>Nigerian Naira</option>
                                <option value='Cedis'>Ghanian Cedi</option>
                            </Select>
                        </Flex>
                        <SimpleGrid columns={3} spacing={{base:2, md:4}} py={{base:4, md:8}}>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('5000')}>#5000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('10000')}>#10000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('50000')}>#50000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('100000')}>#100,000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('500000')}>#500,000</Button>
                            <Button variant='outline' fontSize={{base:'13px', md:'15px'}} fontWeight='500' color='darkgreen' onClick={()=>setAmount('1000000')}>#1,000,000</Button>
                        </SimpleGrid>
                        <Flex direction='column' py={2} gap={1}>
                            <Input type='number' placeholder='# Enter Amount' color='darkgreen' fontSize='16px' fontWeight='400'  value={amount!== 0 ? amount:''} onChange={(e)=>{
                            const newAmount = e.target.value
                            if(newAmount< 2000 ){
                                setAmount(e.target.value)
                                
                                setError('The minimum amount is #2000')
                            }else{
                                setAmount(newAmount)
                                setError('')
                            }
                            
                            }} required/>
                            {
                                error !== '' && (<Text as='span' fontSize={{base:'12px', md:'12px'}} fontWeight='400' color='red'>{error}</Text>)
                            }
                            
                            <Text as='span' fontSize={{base:'12px', md:'14px'}} fontWeight='400' color='darkgreen'>Minimum amount is ₦2,000</Text>
                        </Flex>
                        <Flex direction='column' py={2} gap={1}>
                             <Text as='span' fontSize={{base:'12px', md:'14px'}} fontWeight='400' color='darkgreen'>Email Address:</Text>
                              <Input text='email' placeholder='Enter your email address' color='darkgreen' fontSize='16px' fontWeight='400' required onChange={(e)=>{
                                  const newEmail = e.target.value
                                  if(validator.isEmail(newEmail) && newEmail !== ''){
                                      setMailError('')
                                      setEmail(newEmail)
                                  }else{
                                      setMailError('Invalid Email Address')
                                  }
                              }}/>
                              {
                                  mailError !== '' && ( <Text as='span' fontSize={{base:'12px', md:'12px'}} fontWeight='400' color='red'>{mailError}</Text>)
                              }
                             
                        </Flex>
                        <Flex py={4} w='100%'>
                        <Button variant='action' color='white' py={{base: 6, md:8}}  fontSize='18px' fontWeight='500' w='100%' onClick={handleDonate}>DONATE NOW</Button>
                       </Flex>
                       <Flex direction='column' py={2} bgColor='#F7F7F7' rounded='10px' px={4}>
                            <Text color='believe' fontSize='12px' fontWeight='600'>Back it because you believe in it.</Text>
                            <Text color='support' fontSize='12px' fontWeight='400'>Support our Campaign for no reward, just because it speaks to you.</Text>
                       </Flex>
                    </Flex>
        </Flex>
    )
}

export default Donate

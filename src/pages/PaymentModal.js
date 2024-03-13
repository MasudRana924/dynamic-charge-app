import { Button, Paper, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const PaymentModal = ({ handleClose }) => {
    const [amount, setAmount] = useState('');
    const [payerReference, setpayerReference] = useState('');
    const pay = async () => {
        try {

            const { data } = await axios.post('http://localhost:5000/api/bkash/payment/create', { amount, payerReference, orderId: 1 }, { withCredentials: true });
            window.location.href = data.bkashURL
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <div>
            <Paper
                style={{
                    padding: "20px",
                    marginTop: "30px"
                }}
            >
                
                    <TextField
                        name="amount"
                        label="Fees"
                        required
                        fullWidth
                        onChange={(e) =>
                            setAmount(e.target.value)
                        }
                    />
                    <TextField
                        name="payerReference"
                        label="Reference"
                        required
                        fullWidth
                        style={{ marginTop: 20 }}
                        onChange={(e) =>
                            setpayerReference(e.target.value)
                        }
                    />
                    <Button onClick={pay} type="submit" variant="contained" color="primary" style={{ marginTop: 10 }}>
                        Submit
                    </Button>
            </Paper>
        </div>
    );
};

export default PaymentModal;
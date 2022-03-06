import React from 'react';
import Wallet from '../components/wallet/Wallet'
import Transaction from '../components/transaction/Transaction'
import { Token } from '../util/types'

const Home: React.FC<Token> = ({ token }) => {
    return (
        <>
            <Wallet token={token} />
            <Transaction token={token} />
        </>
    )
}

export default Home
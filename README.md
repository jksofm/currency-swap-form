# Problem 1 

```js


Approach 1 : function sum_to_n(n) {
    let sum = 0;
   for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}


Approach 2: function sum_to_n(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc + val, 0);
}


Approach 3: function sum_to_n(n){
    if(n<=1){
      return n
    }else{
      return n + sum(n-1)
    }
  }

```

# Problem 3


- Computational Inefficiencies and Anti-Patterns:

  - The getPriority() function uses the switch-case to determine the priority of a blockchain. Using switch-case , each case would be evaluated sequentially. This can be not good if there are a large number of blockchains. A more efficient approach would be to use an object or map where blockchain names are keys and priorities are values.


  - The useMemo() hook filters balances based on a condition and then sorts them based on priority. However, the condition inside the filter loop is incorrect since 'lhsPriority' is undefined. It should be replaced with 'balancePriority'.


 
  - The formattedBalances is created by mapping the sortedBalances array which leads to duplicating data. It is not good if the sortedBalances is large. But instead , a better approach would be handle formatting logic directly when rendering WallerRow.



```js
interface WalletBalance {
  currency: string;
  amount: number;
}

const priorities = {
  'Osmosis': 100,
  'Ethereum': 50,
  'Arbitrum': 30,
  'Zilliqa': 20,
  'Neo': 20
};

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  const sortedBalances = useMemo(() => {
    return balances.filter((balance: WalletBalance) => priorities[balance.blockchain] > -99 && balance.amount <= 0)
                   .sort((lhs: WalletBalance, rhs: WalletBalance) => priorities[rhs.blockchain] - priorities[lhs.blockchain]);
  }, [balances, prices]);

  const rows = sortedBalances.map((balance: WalletBalance, index: number) => {
    const usdValue = prices[balance.currency] * balance.amount;
    const formattedAmount = balance.amount.toFixed();
    return (
      <WalletRow 
        className={classes.row}
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={formattedAmount}
      />
    )
  });

  return (
    <div {...rest}>
      {rows}
    </div>
  )
}
```


import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

//components just functions
//props : it s like javascript function ,we can use same function with different parameters as arguments 
//props: Props stand for properties
//We can pass data to the custom component
// by adding a attribute.
// And inside of that component,
// we can then get access to all these attributes
// which might have been set on our custom component.
function ExpenseItem(props){

    return (<div className='expense-item'>
        <ExpenseDate date={props.date} />
        
        <div className='expense-item_description'>
           
            <h2>{props.title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    </div>)
} 

export default ExpenseItem;
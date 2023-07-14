export function getMessage(value) {
    console.log(value)

    if (value < 0) {
        return "Invalid number"
    } 
    
    if (value === 0) {
        return "You don't have any items in your shopping list"
    }

    if (value === 1) {
        return "You have one item in your shopping list"
    }

    if (value >=1) {
        return "You have more than 1 item in your shopping list"
    }
    
    return "The message you return here will show up under the number"
}

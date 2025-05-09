import { create } from 'zustand';

// creating a global state
const useCounterStore = create((set) => ({
	// set updates the state of this global state
	cartItems: JSON.parse(localStorage.getItem('cart')) || [],
	// gets events/data from cart in LS

	// updates the ticket count globally
	updateTicketCount: (index, delta) =>
		set((state) => {
			const items = [...state.cartItems];
			items[index].tickets += delta;
			if (items[index].tickets < 0) return { cartItems: state.cartItems };

			items[index].totalPrice = items[index].tickets * items[index].price;
			localStorage.setItem('cart', JSON.stringify(items));
			return { cartItems: items };
		}),

	// swaps out the cart with our new cartItems
	setCartItems: (items) => {
		localStorage.setItem('cart', JSON.stringify(items));
		set({ cartItems: items });
	},
}));
export default useCounterStore;

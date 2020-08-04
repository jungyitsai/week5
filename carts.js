export default {
    template: `
    <div class="mt-4">
        <button type="button" class="btn btn-outline-danger mb-2 float-right" @click="deleteItem('all')">刪除所有品項</button>
        <table class="table">
            
            <thead>
            <tr>
                <th scope="col">刪除</th>
                <th scope="col">品名</th>
                <th scope="col">數量</th>
                <th scope="col">單位</th>
                <th scope="col">單價</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in carts" :key="item.product.id">
                    <td>
                        <button type="button" class="btn btn-outline-danger" @click="deleteItem(item.product.id)">
                            <i class="far fa-trash-alt"></i>
                        </button>
                    </td>
                    <td>{{ item.product.title }}</td>
                    <td>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <button type="button" class="btn btn-outline-primary" @click="item.quantity--; updateCarts(item.product.id, item.quantity)" :disabled="item.quantity <= 1">-</button>                            
                            </div>
                            <input type="number" min=1 v-model="item.quantity" class="form-control text-right" @change="updateCarts(item.product.id, item.quantity)">
                            <div class="input-group-append">
                                <button type="button" class="btn btn-outline-primary" @click="item.quantity++; updateCarts(item.product.id, item.quantity)">+</button>
                            </div>
                        </div>
                        
                    </td>
                    <td>{{ item.product.unit }}</td>
                    <td>{{ item.product.price }}</td>
                </tr>
                <tr>
                    <td colspan="4"></td>
                    <td>總計： {{ totalCost }} 元</td>
                </tr>
            </tbody>       
        </table>
    </div>
    `,
    props: ["carts", "total-cost"],
    methods: {
        deleteItem(item_id) {
            this.$emit("delete-item", item_id);
        },
        updateCarts(item_id, item_quantity) {
            this.$emit("update-quantity", item_id, item_quantity);
        }
    }
}
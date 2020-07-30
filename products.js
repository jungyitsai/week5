export default {
    template: `
    <div class="row mt-4">
        <div class="col-md-4 mt-3" v-for="item in products" :key="item.id">
            <div class="card">
                <img class="card-img-top" :src="item.imageUrl[0]" alt="Card image cap">
                <div class="card-body">
                    <span class="badge badge-secondary float-right mt-2">{{ item.category }}</span>
                    <h4 class="card-title">{{ item.title }}</h4>
                    <p class="card-text">{{ item.content }}</p>
                    <div>
                        <p style="text-decoration: line-through;"> 原價：{{ item.origin_price }} </p>
                        <h3 class="text-danger"> 特價：{{ item.price}} </h3>
                    </div>
                </div>
                <div class="card-footer d-flex">
                    <button type="button" class="btn btn-outline-secondary btn-sm">更多資訊</button>
                    <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addToCarts(item)">加入購物車</button>
                </div>
            </div>
        </div>
    </div>`,
    props: ['products'],
    data() {
        return {
            tempProduct: {},
        }
    },
    methods: {
        addToCarts(item) {
            this.$emit("add-to-carts", item);
        }
    }
}
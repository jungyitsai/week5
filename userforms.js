export default {
    template: `
    <!-- validation-observer 驗證整體表單 -->
    <validation-observer v-slot="{ invalid }">
        <form @submit.prevent="submitForm">
        
            <validation-provider rules="required" v-slot="{ errors, classes }">
                <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" :class="classes" id="username" v-model="userinfo.name">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
            </validation-provider>

            <validation-provider rules="required|email" v-slot="{ errors, classes }">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" :class="classes" id="email" v-model="userinfo.email">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
            </validation-provider>

            <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                <div class="form-group">
                    <label for="tel">電話</label>
                    <input type="number" class="form-control" :class="classes" id="tel" v-model="userinfo.tel">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
            </validation-provider>
            
            <validation-provider rules="required" v-slot="{ errors, classes }">
                <div class="form-group">
                    <label for="address">住址</label>
                    <input type="text" class="form-control" :class="classes" id="address" v-model="userinfo.address">
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                </div>
            </validation-provider>


            <div class="form-group">
                <label for="payment">付款方式</label>
                <select class="form-control" id="payment" required>
                    <option value="" disabled selected>請選擇一種付款方式</option>
                    <option value="WebATM">WebATM</option>
                    <option value="ATM">ATM</option>
                    <option value="Barcode">Barcode</option>
                    <option value="Credit">Credit</option>
                    <option value="ApplePay">ApplePay</option>
                    <option value="GooglePay">GooglePay</option>
                </select>
            </div>


            <div class="form-group">
                <label for="message">留言</label>
                <textarea id="message" name="message" class="form-control" rows="5" cols="33" v-model="userinfo.message"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" :disabled="invalid">送出表單</button>
        </form>
    </validation-observer>
    `,
    props: ["api", "userinfo"],
    methods: {
        submitForm() {
            this.userinfo.payment = $('#payment').val();
            let data = Object.assign({}, this.userinfo);
            this.$emit("submit-form", data)
        }
    }

}
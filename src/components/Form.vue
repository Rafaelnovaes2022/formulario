<template>
  <div>
    <h1>Formulário</h1>
    <div class="form-demo" style="background-color: #fff">
      <div class="flex justify-content-center">
        <div class="card">
          <h5 class="text-center">Register</h5>
          <form @submit.prevent="" class="p-fluid">
            <div class="field">
              <span class="p-float-label">
                <InputText id="Nome" type="text" v-model="value2" />
                <label for="nome">Nome</label>
              </span>
              <br />
              <br />
              <span class="p-float-label">
                <InputText id="Sobrenome" type="text" v-model="value2" />
                <label for="sobrenome">Sobrenome</label>
              </span>
            </div>
            <br />
            <span class="p-float-label">
              <InputText id="Email" type="text" v-model="value2" />
              <label for="email">Email</label>
            </span>
            <div class="field">
              <div class="p-float-label p-input-icon-right">
                <i class="pi pi-envelope" />
              </div>
            </div>
            <br />
            <div class="field">
              <div class="p-float-label">
                <Password id="password" v-model="password" toggleMask>
                  <template #header>
                    <h6>Pick a password</h6>
                  </template>
                  <template #footer="sp">
                    {{ sp.level }}
                    <Divider />
                    <p class="mt-2">Suggestions</p>
                    <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                      <li>At least one lowercase</li>
                      <li>At least one uppercase</li>
                      <li>At least one numeric</li>
                      <li>Minimum 8 characters</li>
                    </ul>
                  </template>
                </Password>
              </div>
            </div>
            <br />

            <div class="field">
              <div class="p-float-label">
                <Calendar id="date" v-model="date" :showIcon="true" />
                <label for="date">Aniversario</label>
              </div>
            </div>
            <br />
            <div class="field">
              <div class="p-float-label">
                <Dropdown
                  id="country"
                  v-model="country"
                  :options="countries"
                  optionLabel="name"
                />
                <label for="country">País</label>
              </div>
            </div>
            <br />
            <div class="field-checkbox">
              <Checkbox
                id="accept"
                name="accept"
                value="Accept"
                v-model="accept"
              />
            </div>
            <br />
            <Button type="submit" label="Submit" class="mt-2" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false,
    };
  },
};
</script>

<style  lang="scss" scoped>
.form-demo {
  .card {
    min-width: 450px;

    form {
      margin-top: 2rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}
</style>
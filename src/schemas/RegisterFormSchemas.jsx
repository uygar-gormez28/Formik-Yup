import * as yup from "yup"; //todo yupun hepsini yup ismiyle yup kütüphanesinden import edildi

export const registerFormSchema = yup.object().shape({
  //todo registerFormSchema adında bir yup şeması oluşturuldu
  email: yup.string().email("Geçersiz email adresi").required("Email zorunludur"), //todo email alanı string, email formatında ve zorunlu
  age: yup
    .number()
    .positive("Yaş pozitif bir sayı olmalıdır")
    .min(18, "Yaşınız en az 18 olmalıdır")
    .max(35, "yaşınız en fazla 35 olmalıdır")
    .required("Yaş zorunludur"), //todo age alanı number, minimum 18 ve zorunlu
  password: yup.string().min(8, "Şifre en az 8 karakter olmalıdır").required("Şifre zorunludur"), //todo password alanı string, minimum 8 karakter ve zorunlu
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifre tekrarı zorunludur"), //todo confirmPassword alanı password ile eşleşmeli ve zorunlu
  term: yup
    .boolean()
    .oneOf([true], "Kullanıcı sözleşmesini kabul etmelisiniz")
    .required("Kullanıcı sözleşmesi zorunludur"), //todo term alanı boolean, true olmalı ve zorunlu
});

//? genel olarak isimler formik içinde ki state ile aynı olmalı ve type ve zorunulukları belirtilmeli
//? yup kütüphanesi ile form doğrulama kuralları tanımlandı

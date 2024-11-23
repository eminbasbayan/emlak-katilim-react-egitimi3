import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../components/Auth/Input';
import { useForm } from 'react-hook-form';

const schema = Yup.object().shape({
  name: Yup.string()
    .email('Geçerli bir e-mail giriniz.')
    .required('Email gerekli.'),
  email: Yup.string()
    .email('Geçerli bir e-mail giriniz.')
    .required('Email gerekli.'),
  password: Yup.string()
    .required('Şifre gerekli.')
    .min(6, 'Şifre en az 6 karakter olmalı!'),
});

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
  trigger,
} = useForm({
  resolver: yupResolver(schema),
});

function onSubmit(data) {
  const user = {
    fullName: 'Emin Başbayan',
    username: 'eminbasbayan',
    role: 'admin',
  };
  dispatch(loginUser(user));
  toast('Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.', {
    position: 'top-center',
  });
  setTimeout(() => {
    navigate('/');
  }, 1500);
}

const RegisterPage = () => {
  return (
    <>
      {/* Başlık */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Hesap Oluştur</h2>
        <p className="mt-2 text-sm text-gray-600">
          Zaten hesabınız var mı?{' '}
          <a
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Giriş yapın
          </a>
        </p>
      </div>

      {/* Form */}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {/* Ad Soyad */}
          <Input
            label="Name"
            type="text"
            name="name"
            register={register}
            error={errors.name?.message}
            trigger={trigger}
          />

          {/* Email */}
          <Input
            label="Email"
            type="text"
            name="email"
            register={register}
            error={errors.email?.message}
            trigger={trigger}
          />

          {/* Şifre */}
          <Input
            label="Password"
            type="password"
            name="password"
            register={register}
            error={errors.password?.message}
            trigger={trigger}
          />

          {/* Şifre Tekrar */}
          <Input
            label="Password Again"
            type="password"
            name="password"
            register={register}
            error={errors.passwordConfirm?.message}
            trigger={trigger}
          />
        </div>

        {/* Kullanım Şartları */}
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            <span>
              <a href="/terms" className="text-blue-600 hover:text-blue-500">
                Kullanım şartlarını
              </a>{' '}
              kabul ediyorum
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Kayıt Ol
        </button>
      </form>
    </>
  );
};

export default RegisterPage;

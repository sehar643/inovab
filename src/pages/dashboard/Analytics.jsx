import React from 'react';
import { useForm } from 'react-hook-form';

const Analytics = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Analytics</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Section 1: Change Values */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium mb-4">Change Following Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">In Circulation</label>
              <input {...register('inCirculation')} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">USDI Reserves</label>
              <input {...register('usdiReserves')} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">7 Days Change</label>
              <input {...register('sevenDaysChange')} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">30 Days Change</label>
              <input {...register('thirtyDaysChange')} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">365 Days Change</label>
              <input {...register('yearChange')} className="w-full p-2 border rounded" />
            </div>
          </div>
        </div>

        {/* Section 2: Circulating and Reserves */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium mb-4">Circulating and Reserves</h2>
          
          {/* Ethereum Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Ethereum</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Update Address</label>
                <input {...register('ethAddress')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Total Supply</label>
                <input {...register('ethTotalSupply')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Reserves Supply</label>
                <input {...register('ethReservesSupply')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Circulating Supply</label>
                <input {...register('ethCirculatingSupply')} className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>

          {/* BSC Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">BSC</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Same fields as Ethereum */}
              <div>
                <label className="block text-sm font-medium mb-1">Update Address</label>
                <input {...register('bscAddress')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Total Supply</label>
                <input {...register('bscTotalSupply')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Reserves Supply</label>
                <input {...register('bscReservesSupply')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Circulating Supply</label>
                <input {...register('bscCirculatingSupply')} className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>

          {/* Solana Section */}
          <div>
            <h3 className="text-lg font-medium mb-3">Solana</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Same fields as Ethereum */}
              <div>
                <label className="block text-sm font-medium mb-1">Update Address</label>
                <input {...register('solAddress')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Total Supply</label>
                <input {...register('solTotalSupply')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Reserves Supply</label>
                <input {...register('solReservesSupply')} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Circulating Supply</label>
                <input {...register('solCirculatingSupply')} className="w-full p-2 border rounded" />
              </div>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Analytics; 
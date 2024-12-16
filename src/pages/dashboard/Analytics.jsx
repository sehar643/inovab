import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { inovab } from "../../apis/inovab";
import { API } from "../../apis/auth";

const Analytics = () => {
  const { register, handleSubmit, reset } = useForm(); // Add reset to update default values
  const [apiError, setApiError] = useState(null);

  // Fetch data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`${API}/${inovab.getStats}`, {
          method: "GET",
        });

        const response = await result.json();

        if (response.success) {
          // Prepopulate form fields using reset
          reset(response.data);
        } else {
          setApiError("Failed to load data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setApiError("An error occurred while loading data");
      }
    };

    fetchData();
  }, [reset]); // `reset` dependency ensures the form updates with fetched data

  const onSubmit = async (data) => {
    // Transform string values to numbers for specific fields
    const transformedData = {
      ...data,
      inCirculationRC: Number(data?.inCirculationRC),
      reservesRC: Number(data?.reservesRC),
      finalRC: Number(data?.finalRC),
      usdiInCirculationRC: Number(data?.usdiInCirculationRC),
      usdiReservesRC: Number(data?.usdiReservesRC),
      thisMonthRC: Number(data?.thisMonthRC),
      inCirculation7DaysIR: Number(data?.inCirculation7DaysIR),
      reserves7DaysIR: Number(data?.reserves7DaysIR),
      final7DaysIR: Number(data?.final7DaysIR),
      inCirculation30DaysIR: Number(data?.inCirculation30DaysIR),
      reserves30DaysIR: Number(data?.reserves30DaysIR),
      final30DaysIR: Number(data?.final30DaysIR),
      inCirculation365DaysIR: Number(data?.inCirculation365DaysIR),
      reserves365DaysIR: Number(data?.reserves365DaysIR),
      final365DaysIR: Number(data?.final365DaysIR),
    };

    console.log("Transformed Data:", transformedData);

    try {
      const result = await fetch(`${API}/${inovab.updateStats}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      const response = await result.json();

      if (response.success) {
        setApiError("Updated successfully!");
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setApiError("Internal server error, please try again");
    }
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
              <label className="block text-sm font-medium mb-1">
                Reserves Composition - In Circulation
              </label>
              <input
                {...register("inCirculationRC")}
                className="w-full p-2 border rounded"
                type="number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Reserves Composition - Reserves
              </label>
              <input
                {...register("reservesRC")}
                className="w-full p-2 border rounded"
                type="number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Reserves Composition - Final
              </label>
              <input
                {...register("finalRC")}
                className="w-full p-2 border rounded"
                type="number"
              />
            </div>
            {/* Circule Vlaues
            Reserves Composition
           */}
            <div>
              <label className="block text-sm font-medium mb-1">
                USDI in Circulation - In Circle Value 1
              </label>
              <input
                {...register("usdiInCirculationRC")}
                className="w-full p-2 border rounded"
                type="number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                USDI Reserves - In Circle Value 2
              </label>
              <input
                {...register("usdiReservesRC")}
                className="w-full p-2 border rounded"
                type="number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                This Month Name - In Circle Month Name
              </label>
              <input
                {...register("thisMonthName")}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                This Month RC - In Circle Center Value
              </label>
              <input
                {...register("thisMonthRC")}
                className="w-full p-2 border rounded"
                type="number"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Issuance & Redemption */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-medium mb-4">Issuance & Redemption</h2>

          {/* 7 Days Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">7 Days Section</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  7 Day Change - In Circulation
                </label>
                <input
                  {...register("inCirculation7DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  7 Day Change - In Reserves
                </label>
                <input
                  {...register("reserves7DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  7 Day Change - Final
                </label>
                <input
                  {...register("final7DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>
            </div>
          </div>
          {/* 30 Days Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">30 Days Section</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  30 Day Change - In Circulation
                </label>
                <input
                  {...register("inCirculation30DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  30 Day Change - In Reserves
                </label>
                <input
                  {...register("reserves30DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  30 Day Change - Final
                </label>
                <input
                  {...register("final30DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>
            </div>
          </div>
          {/* 365 Days Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">365 Days Section</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  365 Day Change - In Circulation
                </label>
                <input
                  {...register("inCirculation365DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  365 Day Change - In Reserves
                </label>
                <input
                  {...register("reserves365DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  365 Day Change - Final
                </label>
                <input
                  {...register("final365DaysIR")}
                  className="w-full p-2 border rounded"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
        {apiError && (
          <div
            className={`mb-4 mt-6 p-3 ${
              apiError.includes("error") ? "bg-red-600" : "bg-green-500"
            } text-white rounded-md flex justify-between items-center`}
          >
            <span>{apiError}</span>
            <button
              onClick={() => setApiError(null)}
              className="text-white font-bold hover:text-red-800 text-lg"
            >
              &times;
            </button>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Analytics;

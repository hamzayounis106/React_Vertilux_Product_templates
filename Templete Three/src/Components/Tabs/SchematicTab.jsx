export default function SchematicTab({ formData, setFormData, onSubmit }) {
  return (
    <div className='w-full space-y-6 p-4'>
      <h3 className='text-lg font-semibold text-gray-700'>
        Schematic Configuration
      </h3>

      <form onSubmit={onSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-600'>
            Schematic Name
          </label>
          <div className='relative rounded-md shadow-sm'>
            <input
              type='text'
              className='block w-full rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500 text-gray-900 px-4 py-2'
              placeholder='Name input'
              value={formData.schematicName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  schematicName: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className='space-y-2'>
          <label className='block text-sm font-medium text-gray-600'>
            Schematic Link
          </label>
          <div className='relative rounded-md shadow-sm'>
            <input
              type='text'
              className='block w-full rounded-md border-gray-300 focus:border-red-500 focus:ring-red-500 text-gray-900 px-4 py-2'
              placeholder='Enter Link'
              value={formData.schematicLink}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  schematicLink: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className='pt-4'>
          <button
            type='submit'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-red-900 text-white hover:bg-red-800 transition-colors'
          >
            Save Configuration
          </button>
          <p className='mt-2 text-sm text-gray-500'>
            {formData.schematicName || formData.schematicLink
              ? `Ready to submit: ${formData.schematicName} - ${formData.schematicLink}`
              : 'Enter schematic details to save configuration'}
          </p>
        </div>
      </form>
    </div>
  );
}

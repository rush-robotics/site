import React, { useState } from 'react';

const formActionURL = "https://docs.google.com/forms/d/e/1FAIpQLSee0kd-KKbIOAaL8ggFfU0cPS80b69vWSVJYXDH6EOcW1ODhA/formResponse";

export function MockGoogleForm() {
    const [submitted, setSubmitted] = useState(false);

    // Type 9 refers to date, need to send year, month, day
    const [date, setDate] = useState("");

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const handleSubmit = () => {
        // e.preventDefault(); // Don't prevent default, let it target the hidden iframe
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center w-full max-w-lg mx-auto my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                <p className="text-gray-600">Your response has been recorded. We will contact you soon.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                    Submit another response
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100 mx-auto my-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Free Restaurant Walkthrough</h2>
            <p className="text-gray-600 mb-8">
                We specialize in working with restaurants in D.C., Maryland, and Virginia. Reach out to schedule a free, no-pressure walkthrough. We'll call you back within one business day.
            </p>

            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>

            <form action={formActionURL} method="POST" target="hidden_iframe" onSubmit={handleSubmit} className="space-y-6">

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Contact Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person's Full Name *</label>
                            <input required type="text" name="entry.349486288" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name *</label>
                            <input required type="text" name="entry.998368128" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email Address *</label>
                            <input required type="email" name="entry.336981018" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone Number *</label>
                            <input required type="tel" name="entry.2130159344" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                        </div>
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Restaurant Details</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Street Address *</label>
                        <textarea required name="entry.1031794031" rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Region *</label>
                            <select required name="entry.492125508" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                                <option value="">Select a region</option>
                                <option value="Washington D.C.">Washington D.C.</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Virginia">Virginia</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine/Establishment Type *</label>
                            <select required name="entry.701250014" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                                <option value="">Select type</option>
                                <option value="Fine Dining">Fine Dining</option>
                                <option value="Casual Dining">Casual Dining</option>
                                <option value="Quick Service/Fast Casual">Quick Service/Fast Casual</option>
                                <option value="Café/Bakery">Café/Bakery</option>
                                <option value="Bar/Pub">Bar/Pub</option>
                                <option value="Other (Please specify below)">Other (Please specify below)</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">If 'Other' cuisine type, please specify:</label>
                        <input type="text" name="entry.517631695" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Scheduling</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">When is the best time to call you back for scheduling? (Select one per day) *</label>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left border-collapse">
                                <thead>
                                    <tr>
                                        <th className="font-medium text-gray-700 pb-2 border-b">Day</th>
                                        <th className="font-medium text-gray-700 pb-2 text-center border-b">Morning (9am-12pm)</th>
                                        <th className="font-medium text-gray-700 pb-2 text-center border-b">Afternoon (12pm-4pm)</th>
                                        <th className="font-medium text-gray-700 pb-2 text-center border-b">Late Afternoon (4pm-6pm)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { day: 'Monday', id: '954583292' },
                                        { day: 'Tuesday', id: '317520629' },
                                        { day: 'Wednesday', id: '1403689865' },
                                        { day: 'Thursday', id: '1803740065' },
                                        { day: 'Friday', id: '1211707420' },
                                    ].map(row => (
                                        <tr key={row.day} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                            <td className="py-3 font-medium text-gray-600 pl-2">{row.day}</td>
                                            <td className="py-3 text-center"><input type="radio" name={`entry.${row.id}`} value="Morning (9am-12pm)" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></td>
                                            <td className="py-3 text-center"><input type="radio" name={`entry.${row.id}`} value="Afternoon (12pm-4pm)" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></td>
                                            <td className="py-3 text-center"><input type="radio" name={`entry.${row.id}`} value="Late Afternoon (4pm-6pm)" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500" /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date for Walkthrough (Optional)</label>
                            <input
                                type="date"
                                onChange={handleDateChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            />
                            {/* Hidden fields for Google Form Date format */}
                            <input type="hidden" name="entry.1009910810_year" value={date.split('-')[0] || ''} />
                            <input type="hidden" name="entry.1009910810_month" value={date.split('-')[1] || ''} />
                            <input type="hidden" name="entry.1009910810_day" value={date.split('-')[2] || ''} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us? *</label>
                            <select required name="entry.939358166" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                                <option value="">Select option</option>
                                <option value="Referral">Referral</option>
                                <option value="Search Engine (Google, Bing, etc.)">Search Engine</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Industry Event/Trade Show">Industry Event</option>
                                <option value="Existing Client">Existing Client</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="pt-6">
                    <button type="submit" className="w-full bg-gray-900 text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors focus:ring-4 focus:ring-gray-200">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

document.addEventListener("DOMContentLoaded", function () {
    SalesforceInteractions.init({
        // cookieDomain: 'abcd.com',
        consents: new Promise(resolve => {
            // Default to opt-in
            resolve([{
                provider: 'Test Provider',
                purpose: SalesforceInteractions.ConsentPurpose.Tracking,
                status: SalesforceInteractions.ConsentStatus.OptIn
            }]);
        })
    }).then(() => {
        // set the log level during sitemap development to see potential problems
        console.log('Salesforce Interactions WEB SDK is ready');
        SalesforceInteractions.setLoggingLevel('DEBUG');

        const {
            cashDom,
            listener,
            resolvers,
            sendEvent,
            util,
            CatalogObjectInteractionName,
        } = SalesforceInteractions


        const landEventSent = sessionStorage.getItem('landEventSent') || false;


        if (!landEventSent) {
            SalesforceInteractions.sendEvent({
                interaction: {
                    name: "Entered Website",
                    eventType: "Leads",
                    score: 10,
                }
            })


            sessionStorage.setItem('landEventSent', true);
        }

        var globalcontactKey='';
        if (window.location.href.includes('contactKey')) {


            console.log('user has contactKey');
            const params = new URLSearchParams(window.location.search);
            const contactKey = params.get('contactKey');
            globalcontactKey=contactKey;
            console.debug('printing contactKey');
            console.debug(contactKey);

          
            SalesforceInteractions.sendEvent({
                interaction: {
                    name: "Capture LeadId"
                },
                user: {
                    attributes: {
                        leadId: contactKey,
                        eventType: "identity",
                        isAnonymous: 0
                    },
                },
            });

        }




        const global = {
            listeners: [

                listener("click", ".send_button", (event) => {
                    console.log('send button clicked');

                    const firstname = document.querySelector("#firstName").value;
                    const lastName = document.querySelector("#lastName").value;
                    const email = document.querySelector("#email").value;
                    const phone_number = document.querySelector("#phoneNumber").value;

                    console.log(firstname);
                    console.log(lastName);
                    console.log(email);
                    console.log(phone_number);

                    console.log('user has contactKey');
                    const params = new URLSearchParams(window.location.search);
                    const contactKey = params.get('contactKey');
                    console.debug('printing contactKey');
                    console.debug(contactKey);

                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: 'Lead Capture Form',
                        },
                        user: {
                            attributes: {
                                firstName: firstname,
                                lastName: lastName,
                                email: email,
                                phoneNumber: phone_number,
                                leadId: contactKey,
                                eventType: 'identity',
                                isAnonymous: '0'
                            },
                        },
                    });


                }),

                listener("click", ".book", (event) => {
                    console.log('send button clicked');

                    SalesforceInteractions.sendEvent({

                        interaction: {
                            name: "book",
                            leadId: globalcontactKey,
                            leadsInteractionName: "book",
                            eventType: "Leads",
                            score: 3,
                        }
                    })


                }),


                listener("click", ".btn.btn__secondary", (event) => {
                    console.log('send button clicked');

                    SalesforceInteractions.sendEvent({
                        interaction: {
                            name: "buy",
                            leadId:globalcontactKey,
                            leadsInteractionName: "buy",
                            eventType: "Leads",
                            score: 3,
                        }
                    })


                })

            ]
        }




        const pageTypeDefault = {
            name: 'default'
        }

        SalesforceInteractions.initSitemap({
            global,
            pageTypeDefault,
            pageTypes: []
        })

    });
});
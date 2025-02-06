import React from 'react';

const TarjetaPresentacion = () => {
    return (
        <div className="col-md-3 col-sm-6">
            <div class="card team-card text-center h-100">
                <img src="/api/placeholder/300/300" class="card-img-top" alt="Team member" />
                <div class="card-body">
                    <h5 class="card-title">Full Name</h5>
                    <p class="card-subtitle mb-2 text-muted">Job Title</p>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    );
};

export default TarjetaPresentacion;